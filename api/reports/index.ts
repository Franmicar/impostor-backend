import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from '../../src/config/firebase';
import { handleCors } from '../../src/utils/cors';
import { authenticateApiKey } from '../../src/middleware/auth';
import nodemailer from 'nodemailer';

// Rate limiting en memoria (best-effort): la API key va embebida en el bundle
// del cliente y es extraible, asi que este endpoint de escritura necesita una
// mitigacion adicional de abuso. No es perfecto entre instancias serverless
// distintas, pero limita el spam en la practica sin anadir infraestructura nueva.
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configuración de CORS
  if (handleCors(req, res)) return;

  // Autenticación por API Key
  if (!authenticateApiKey(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
    || req.socket?.remoteAddress
    || 'unknown';

  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many reports. Please try again later.' });
  }

  try {
    const { message, uid, type, timestamp, platform, appVersion } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message is too long (maximum 1000 characters)' });
    }

    const reportData = {
      message,
      type: type || 'bug',
      uid: uid || 'anonymous',
      timestamp: timestamp || new Date().toISOString(),
      platform: platform || 'unknown',
      appVersion: appVersion || 'unknown',
      status: 'new'
    };

    const adminDb = getDb();
    await adminDb.collection('reports').add(reportData);

    // Enviar email
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            // Ignorar errores de certificado local (común en Windows con Antivirus)
            rejectUnauthorized: false
          }
        });

        const mailOptions = {
          from: `"Impostor Words Reports" <${process.env.EMAIL_USER}>`,
          to: 'support.deceptra@gmail.com',
          subject: `Nuevo reporte: ${reportData.type.toUpperCase()} - Impostor Words`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
              <h2 style="color: #d9534f;">Nuevo Reporte Recibido</h2>
              <p>Se ha recibido un nuevo reporte/sugerencia en la aplicación.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold; width: 30%;">Tipo:</td>
                  <td style="padding: 10px;">${escapeHtml(reportData.type)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Usuario (UID):</td>
                  <td style="padding: 10px;">${escapeHtml(reportData.uid)}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Plataforma:</td>
                  <td style="padding: 10px;">${escapeHtml(reportData.platform)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Versión de la App:</td>
                  <td style="padding: 10px;">${escapeHtml(reportData.appVersion)}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Fecha:</td>
                  <td style="padding: 10px;">${escapeHtml(reportData.timestamp)}</td>
                </tr>
              </table>

              <h3 style="margin-top: 30px; color: #5bc0de;">Mensaje del Usuario:</h3>
              <blockquote style="background-color: #f4f4f4; border-left: 5px solid #5bc0de; padding: 15px; margin: 0; font-style: italic;">
                ${escapeHtml(message)}
              </blockquote>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email de reporte enviado exitosamente a support.deceptra@gmail.com');
      } else {
        console.warn('Faltan variables EMAIL_USER o EMAIL_PASS. No se pudo enviar el email del reporte.');
      }
    } catch (emailError) {
      console.error('Error al intentar enviar el correo:', emailError);
    }

    return res.status(200).json({ success: true, message: 'Report created successfully' });
  } catch (error) {
    console.error('Error creating report:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
