import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseController } from './BaseController';
import { PackageService } from '../services/packageService';

export class PackageController extends BaseController {
    constructor(private readonly packageService: PackageService) {
        super();
    }

    async list(req: VercelRequest, res: VercelResponse) {
        try {
            const lang = (req.query.lang as string) || 'es';
            const packages = await this.packageService.getAllPackages(lang);
            this.handleSuccess(res, packages, 'Packages retrieved successfully');
        } catch (error) {
            this.handleError(error, res, 'package.list');
        }
    }

    async getOne(req: VercelRequest, res: VercelResponse) {
        try {
            const id = req.query.id as string;
            const lang = (req.query.lang as string) || 'es';
            const pkg = await this.packageService.getPackageById(id, lang);
            this.handleSuccess(res, pkg, 'Package retrieved successfully');
        } catch (error: any) {
            if (error.message === 'Package not found') {
                return this.handleNotFound(res, error.message);
            }
            this.handleError(error, res, 'package.getOne');
        }
    }

    async getWords(req: VercelRequest, res: VercelResponse) {
        try {
            const id = req.query.id as string;
            const lang = (req.query.lang as string) || 'es';
            const words = await this.packageService.getPackageWords(id, lang);
            this.handleSuccess(res, words, 'Words retrieved successfully');
        } catch (error: any) {
            this.handleError(error, res, 'package.getWords');
        }
    }
}
