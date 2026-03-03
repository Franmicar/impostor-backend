import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PackageController } from '../../src/controllers/PackageController';
import { PackageService } from '../../src/services/packageService';
import { PackageRepository } from '../../src/repositories/PackageRepository';
import { handleCors } from '../../src/utils/cors';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (handleCors(req, res)) return;

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const repository = new PackageRepository();
    const service = new PackageService(repository);
    const controller = new PackageController(service);

    await controller.getOne(req, res);
}
