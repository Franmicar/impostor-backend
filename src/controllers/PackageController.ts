import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseController } from './BaseController';
import { PackageService } from '../services/packageService';
import { listPackagesSchema, getPackageSchema } from '../validators/packageValidators';
import { ValidationError } from '../utils/errors';

export class PackageController extends BaseController {
    constructor(private readonly packageService: PackageService) {
        super();
    }

    async list(req: VercelRequest, res: VercelResponse) {
        try {
            const parsed = listPackagesSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new ValidationError('Invalid parameters', parsed.error.format());
            }

            const packages = await this.packageService.getAllPackages(parsed.data.lang);
            this.handleSuccess(res, packages, 'Packages retrieved successfully');
        } catch (error) {
            this.handleError(error, res, 'package.list');
        }
    }

    async getOne(req: VercelRequest, res: VercelResponse) {
        try {
            const parsed = getPackageSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new ValidationError('Invalid parameters', parsed.error.format());
            }

            const pkg = await this.packageService.getPackageById(parsed.data.id, parsed.data.lang);
            this.handleSuccess(res, pkg, 'Package retrieved successfully');
        } catch (error) {
            this.handleError(error, res, 'package.getOne');
        }
    }

    async getWords(req: VercelRequest, res: VercelResponse) {
        try {
            const parsed = getPackageSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new ValidationError('Invalid parameters', parsed.error.format());
            }

            const words = await this.packageService.getPackageWords(parsed.data.id, parsed.data.lang);
            this.handleSuccess(res, words, 'Words retrieved successfully');
        } catch (error) {
            this.handleError(error, res, 'package.getWords');
        }
    }
}
