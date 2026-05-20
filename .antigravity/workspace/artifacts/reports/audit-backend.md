# 🕵️‍♂️ Auditoría Técnica: Impostor Backend

**Fecha:** 7 de Mayo de 2026
**Framework Evaluado:** Node.js (Vercel Serverless Functions) + Firebase Admin
**Alcance:** Rendimiento Serverless, Seguridad, Diseño de API, Integración Firebase, Manejo de Errores.

Esta auditoría silenciosa ha evaluado el código base de `impostor-backend` comparándolo estrictamente contra los estándares de `1-system/rules` y `2-knowledge/capabilities` (backend-architect, nodejs-best-practices, vercel-deployment).

---

## 🛑 1. Vulnerabilidades de Seguridad (Security Rules)

### Falta Crítica de Validación de Inputs
Aunque `zod` está instalado en el `package.json`, **no se utiliza en ninguna parte** del proyecto. La carpeta `src/validators` está vacía.

En `PackageController.ts`, se confía ciegamente en los inputs del cliente:
```typescript
const id = req.query.id as string;
const lang = (req.query.lang as string) || 'es';
```
**Riesgo:** Si un atacante envía `?id=1&id=2`, `req.query.id` será un array, provocando un crasheo interno o comportamiento indefinido. 
**Solución Requerida:** Implementar esquemas de Zod para validar `req.query` y capturar el error usando el método `handleValidationError` de `BaseController` que actualmente es código muerto.

### Inexistencia de Rate Limiting
Los endpoints en Vercel Serverless Functions (`api/packages/index.ts`, etc.) están completamente abiertos a consultas.
**Riesgo:** Alta susceptibilidad a ataques DDoS o facturación masiva en Vercel/Firebase (Billing Exploits) si se sobrecargan las consultas.

---

## 🐢 2. Cuellos de Botella en Serverless (Vercel) y Arquitectura

### Re-instanciación de Clases en cada Request
En cada Serverless Function (`api/packages/[id].ts` y `index.ts`), se instancian manualmente el repositorio, el servicio y el controlador en cada ejecución de la ruta:
```typescript
const repository = new PackageRepository();
const service = new PackageService(repository);
const controller = new PackageController(service);
```
**Riesgo:** Esto aumenta los tiempos de cold-start y consumo de memoria. En funciones Serverless, la memoria caché debe reutilizarse.
**Solución Requerida:** Implementar un patrón Singleton simple para inicializar estas clases una sola vez por contenedor cálido (warm container).

### Ineficiencias con Firebase Admin
En `PackageRepository.ts`, el método de acceso a datos `findAll()` no está diseñado para escalar:
```typescript
async findAll() {
    const snapshot = await this.collection.get();
    // ...
}
```
**Riesgo:** Si la colección `packages` crece, este endpoint traerá toda la base de datos a memoria, incrementando la latencia, el costo de lecturas en Firestore y el consumo de memoria.
**Solución Requerida:** Implementar caché (ej. cabeceras `Cache-Control: s-maxage=86400`) y/o consultas selectivas en Firestore.

---

## 💣 3. Código Frágil y Manejo de Errores

### Control de Errores Basado en Strings (Anti-patrón)
En `PackageController.ts` se observa un anti-patrón severo de acoplamiento al comprobar los errores:
```typescript
} catch (error: any) {
    if (error.message === 'Package not found') {
        return this.handleNotFound(res, error.message);
    }
    // ...
}
```
**Riesgo:** Depender del mensaje de texto exacto de un error es extremadamente frágil. Si el servicio cambia el mensaje por refactorización, el controlador fallará y devolverá un `500 Internal Server Error`.
**Solución Requerida:** Crear clases de error customizadas (ej. `NotFoundError extends Error`) y capturarlas usando `instanceof`.

### Manejo de Tipos "Any" y Ausencia de Interfaces
Se observan casteos silenciosos y uso indiscriminado de `any`:
- En `PackageService.ts`: `const pkg: any = await this.packageRepository.findById(id);`
- En `BaseController.ts`: `protected handleSuccess(res: VercelResponse, data: any...`

**Riesgo:** Anula completamente los beneficios de TypeScript. Errores estructurales pueden colarse a producción ya que el compilador los ignorará.

---

## 📋 Plan de Acción Recomendado

1. **Capa de Seguridad:** Configurar middlewares para `zod` e implementar la validación de `req.query` y `req.body`.
2. **Refactorización de Errores:** Reemplazar el chequeo de strings por una jerarquía de clases (`AppError`, `NotFoundError`, etc.).
3. **Rendimiento (Vercel Cache):** Inyectar cabeceras `Cache-Control` (`s-maxage`) en el `BaseController.ts` para que Vercel Edge Network cachee las peticiones de los paquetes de palabras estáticas.
4. **Capa de Datos:** Remover `any` de los repositorios y servicios creando interfaces de dominio explícitas (`Package`, `Word`).
