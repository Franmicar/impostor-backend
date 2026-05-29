"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateApiKey = authenticateApiKey;
function authenticateApiKey(req, res) {
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
