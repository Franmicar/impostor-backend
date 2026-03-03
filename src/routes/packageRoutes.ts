import { Router } from 'express';
import { PackageController } from '../controllers/PackageController';
import { PackageService } from '../services/packageService';
import { PackageRepository } from '../repositories/PackageRepository';
import { asyncErrorWrapper } from '../utils/asyncWrapper';

const router = Router();

// Dependeny Injection Initialization Pattern
const repository = new PackageRepository();
const service = new PackageService(repository);
const controller = new PackageController(service);

router.get('/', asyncErrorWrapper((req, res, next) => controller.list(req, res)));
router.get('/:id', asyncErrorWrapper((req, res, next) => controller.getOne(req, res)));
router.get('/:id/words', asyncErrorWrapper((req, res, next) => controller.getWords(req, res)));

export { router as packageRoutes };
