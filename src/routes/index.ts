import { Router } from 'express';
import { packageRoutes } from './packageRoutes';

export const routes = Router();

routes.use('/packages', packageRoutes);
// Futuras rutas... /words, /sessions, etc.
