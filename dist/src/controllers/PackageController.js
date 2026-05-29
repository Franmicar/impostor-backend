"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const BaseController_1 = require("./BaseController");
const packageValidators_1 = require("../validators/packageValidators");
const errors_1 = require("../utils/errors");
class PackageController extends BaseController_1.BaseController {
    constructor(packageService) {
        super();
        this.packageService = packageService;
    }
    async list(req, res) {
        try {
            const parsed = packageValidators_1.listPackagesSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new errors_1.ValidationError('Invalid parameters', parsed.error.format());
            }
            const packages = await this.packageService.getAllPackages(parsed.data.lang);
            this.handleSuccess(res, packages, 'Packages retrieved successfully');
        }
        catch (error) {
            this.handleError(error, res, 'package.list');
        }
    }
    async getOne(req, res) {
        try {
            const parsed = packageValidators_1.getPackageSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new errors_1.ValidationError('Invalid parameters', parsed.error.format());
            }
            const pkg = await this.packageService.getPackageById(parsed.data.id, parsed.data.lang);
            this.handleSuccess(res, pkg, 'Package retrieved successfully');
        }
        catch (error) {
            this.handleError(error, res, 'package.getOne');
        }
    }
    async getWords(req, res) {
        try {
            const parsed = packageValidators_1.getPackageSchema.safeParse(req.query);
            if (!parsed.success) {
                throw new errors_1.ValidationError('Invalid parameters', parsed.error.format());
            }
            const words = await this.packageService.getPackageWords(parsed.data.id, parsed.data.lang);
            this.handleSuccess(res, words, 'Words retrieved successfully');
        }
        catch (error) {
            this.handleError(error, res, 'package.getWords');
        }
    }
}
exports.PackageController = PackageController;
