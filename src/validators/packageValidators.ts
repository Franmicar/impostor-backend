import { z } from 'zod';

export const listPackagesSchema = z.object({
    lang: z.string().optional().default('es')
});

export const getPackageSchema = z.object({
    id: z.string().min(1, "Package ID is required"),
    lang: z.string().optional().default('es')
});
