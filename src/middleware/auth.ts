import type { VercelRequest, VercelResponse } from '@vercel/node';

export function authenticateApiKey(req: VercelRequest, res: VercelResponse): boolean {
    const apiKey = req.headers['x-api-key'];
    const expectedKey = process.env.API_KEY;

    // Fail-closed: si el servidor no tiene API_KEY configurada, es un error de
    // despliegue, no una via para dejar pasar peticiones sin autenticar.
    if (!expectedKey) {
        console.error('API_KEY is not configured in environment variables. Rejecting request.');
        res.status(500).json({
            success: false,
            message: 'Server misconfiguration'
        });
        return false;
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
