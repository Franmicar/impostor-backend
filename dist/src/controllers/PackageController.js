"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const BaseController_1 = require("./BaseController");
class PackageController extends BaseController_1.BaseController {
    constructor(packageService) {
        super();
        this.packageService = packageService;
    }
    async list(req, res) {
        try {
            const lang = req.query.lang || 'es';
            const packages = await this.packageService.getAllPackages(lang);
            this.handleSuccess(res, packages, 'Packages retrieved successfully');
        }
        catch (error) {
            this.handleError(error, res, 'package.list');
        }
    }
    async getOne(req, res) {
        try {
            const id = req.params.id;
            const lang = req.query.lang || 'es';
            const pkg = await this.packageService.getPackageById(id, lang);
            this.handleSuccess(res, pkg, 'Package retrieved successfully');
        }
        catch (error) {
            if (error.message === 'Package not found') {
                return this.handleNotFound(res, error.message);
            }
            this.handleError(error, res, 'package.getOne');
        }
    }
    async getWords(req, res) {
        try {
            const id = req.params.id;
            const lang = req.query.lang || 'es';
            const words = await this.packageService.getPackageWords(id, lang);
            this.handleSuccess(res, words, 'Words retrieved successfully');
        }
        catch (error) {
            this.handleError(error, res, 'package.getWords');
        }
    }
}
exports.PackageController = PackageController;
