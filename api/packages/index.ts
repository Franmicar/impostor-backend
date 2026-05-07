import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleCors } from '../../src/utils/cors';
import { authenticateApiKey } from '../../src/middleware/auth';
import { container } from '../../src/config/container';
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (handleCors(req, res)) return;

    if (!authenticateApiKey(req, res)) return;

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    await container.packageController.list(req, res);
}
