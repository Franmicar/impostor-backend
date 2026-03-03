"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const packageRoutes_1 = require("./packageRoutes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/packages', packageRoutes_1.packageRoutes);
// Futuras rutas... /words, /sessions, etc.
