import { Request, Response, NextFunction } from 'express';

// Wrapper para evitar anidar try-catch (Regla #8 Backend Guidelines)
export const asyncErrorWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
