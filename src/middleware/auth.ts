import type { VercelRequest, VercelResponse } from '@vercel/node';

export function authenticateApiKey(req: VercelRequest, res: VercelResponse): boolean {
    const apiKey = req.headers['x-api-key'];
    const expectedKey = process.env.API_KEY;

    // Si no hay API_KEY configurada en el servidor, no forzamos la autenticación. 
    // Para entornos locales sin variable. En producción debe estar configurada.
    if (!expectedKey) {
        console.warn('Warning: API_KEY is not configured in environment variables.');
        return true; 
    }

    if (!apiKey || apiKey !== expectedKey) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid API Key'
        });
        return false;
    }

    return true;
}
