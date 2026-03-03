import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

// Asegurarse de que el .env esté cargado
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().default('3000'),
    DATABASE_URL: z.string().url().or(z.string().startsWith('file:')), // Support for Prisma SQLite file: protocol
});

const parseEnv = () => {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        console.error('❌ Invalid environment variables:', parsed.error.format());
        process.exit(1);
    }

    return parsed.data;
};

const env = parseEnv();

// unifiedConfig exportado globalmente (Requisito Guidelines)
export const config = {
    env: env.NODE_ENV,
    port: parseInt(env.PORT, 10),
    db: {
        url: env.DATABASE_URL
    }
};
