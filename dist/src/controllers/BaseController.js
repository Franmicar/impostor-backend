"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    /**
     * Responde con un status 200 y JSON data format
     */
    handleSuccess(res, data, message = 'Success') {
        res.status(200).json({
            success: true,
            message,
            data
        });
    }
    /**
     * Responde con un status 201 y un item creado
     */
    handleCreated(res, data, message = 'Created successfully') {
        res.status(201).json({
            success: true,
            message,
            data
        });
    }
    /**
     * Captura el error, lo loguea (futuro Sentry link aquí) y devuelve formatiado
     */
    handleError(error, res, context) {
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
    handleValidationError(res, errors) {
        res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors
        });
    }
    /**
     * Elemento no encontrado
     */
    handleNotFound(res, message = 'Resource not found') {
        res.status(404).json({
            success: false,
            message,
        });
    }
}
exports.BaseController = BaseController;
