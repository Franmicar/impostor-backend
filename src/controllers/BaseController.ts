import { Request, Response } from 'express';

export abstract class BaseController {

    /**
     * Responde con un status 200 y JSON data format
     */
    protected handleSuccess(res: Response, data: any, message: string = 'Success') {
        res.status(200).json({
            success: true,
            message,
            data
        });
    }

    /**
     * Responde con un status 201 y un item creado
     */
    protected handleCreated(res: Response, data: any, message: string = 'Created successfully') {
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    /**
     * Captura el error, lo loguea (futuro Sentry link aquí) y devuelve formatiado
     */
    protected handleError(error: unknown, res: Response, context?: string) {
        console.error(`[BaseController Error] Context: ${context || 'Unknown'}`, error);

        // Regla #5 (Backend Dev Guidelines): Integrar con Sentry en el futuro aquí.
        // Sentry.captureException(error); 

        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }

    /**
     * Manejo estandar de Validation Error (Zod usualmente)
     */
    protected handleValidationError(res: Response, errors: any) {
        res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors
        });
    }

    /**
     * Elemento no encontrado
     */
    protected handleNotFound(res: Response, message: string = 'Resource not found') {
        res.status(404).json({
            success: false,
            message,
        })
    }
}
