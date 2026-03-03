import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { PackageService } from '../services/packageService';

export class PackageController extends BaseController {
    constructor(private readonly packageService: PackageService) {
        super();
    }

    async list(req: Request, res: Response) {
        try {
            const lang = (req.query.lang as string) || 'es';
            const packages = await this.packageService.getAllPackages(lang);
            this.handleSuccess(res, packages, 'Packages retrieved successfully');
        } catch (error) {
            this.handleError(error, res, 'package.list');
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = req.params.id as string;
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

    async getWords(req: Request, res: Response) {
        try {
            const id = req.params.id as string;
            const lang = (req.query.lang as string) || 'es';
            const words = await this.packageService.getPackageWords(id, lang);
            this.handleSuccess(res, words, 'Words retrieved successfully');
        } catch (error: any) {
            this.handleError(error, res, 'package.getWords');
        }
    }
}
