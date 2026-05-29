"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const firebase_1 = require("../../src/config/firebase");
const cors_1 = require("../../src/utils/cors");
const auth_1 = require("../../src/middleware/auth");
const nodemailer_1 = __importDefault(require("nodemailer"));
async function handler(req, res) {
    // Configuración de CORS
    if ((0, cors_1.handleCors)(req, res))
        return;
    // Autenticación por API Key
    if (!(0, auth_1.authenticateApiKey)(req, res))
        return;
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
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
        const adminDb = (0, firebase_1.getDb)();
        await adminDb.collection('reports').add(reportData);
        // Enviar email
        try {
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                const transporter = nodemailer_1.default.createTransport({
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
                  <td style="padding: 10px;">${type || 'bug'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Usuario (UID):</td>
                  <td style="padding: 10px;">${uid || 'anonymous'}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Plataforma:</td>
                  <td style="padding: 10px;">${platform || 'unknown'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Versión de la App:</td>
                  <td style="padding: 10px;">${appVersion || 'unknown'}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px; font-weight: bold;">Fecha:</td>
                  <td style="padding: 10px;">${reportData.timestamp}</td>
                </tr>
              </table>

              <h3 style="margin-top: 30px; color: #5bc0de;">Mensaje del Usuario:</h3>
              <blockquote style="background-color: #f4f4f4; border-left: 5px solid #5bc0de; padding: 15px; margin: 0; font-style: italic;">
                ${message}
              </blockquote>
            </div>
          `,
                };
                await transporter.sendMail(mailOptions);
                console.log('Email de reporte enviado exitosamente a support.deceptra@gmail.com');
            }
            else {
                console.warn('Faltan variables EMAIL_USER o EMAIL_PASS. No se pudo enviar el email del reporte.');
            }
        }
        catch (emailError) {
            console.error('Error al intentar enviar el correo:', emailError);
        }
        return res.status(200).json({ success: true, message: 'Report created successfully' });
    }
    catch (error) {
        console.error('Error creating report:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
