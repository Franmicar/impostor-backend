"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const PackageRepository_1 = require("../repositories/PackageRepository");
const packageService_1 = require("../services/packageService");
const PackageController_1 = require("../controllers/PackageController");
class Container {
    constructor() {
        this.packageRepository = new PackageRepository_1.PackageRepository();
        this.packageService = new packageService_1.PackageService(this.packageRepository);
        this.packageController = new PackageController_1.PackageController(this.packageService);
    }
}
// Singleton instance
exports.container = new Container();
