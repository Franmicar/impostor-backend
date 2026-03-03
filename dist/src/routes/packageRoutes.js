"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageRoutes = void 0;
const express_1 = require("express");
const PackageController_1 = require("../controllers/PackageController");
const packageService_1 = require("../services/packageService");
const PackageRepository_1 = require("../repositories/PackageRepository");
const asyncWrapper_1 = require("../utils/asyncWrapper");
const router = (0, express_1.Router)();
exports.packageRoutes = router;
// Dependeny Injection Initialization Pattern
const repository = new PackageRepository_1.PackageRepository();
const service = new packageService_1.PackageService(repository);
const controller = new PackageController_1.PackageController(service);
router.get('/', (0, asyncWrapper_1.asyncErrorWrapper)((req, res, next) => controller.list(req, res)));
router.get('/:id', (0, asyncWrapper_1.asyncErrorWrapper)((req, res, next) => controller.getOne(req, res)));
router.get('/:id/words', (0, asyncWrapper_1.asyncErrorWrapper)((req, res, next) => controller.getWords(req, res)));
