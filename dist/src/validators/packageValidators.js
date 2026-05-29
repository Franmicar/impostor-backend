"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageSchema = exports.listPackagesSchema = void 0;
const zod_1 = require("zod");
exports.listPackagesSchema = zod_1.z.object({
    lang: zod_1.z.string().optional().default('es')
});
exports.getPackageSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "Package ID is required"),
    lang: zod_1.z.string().optional().default('es')
});
