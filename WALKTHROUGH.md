# El Impostor - Walkthrough Arquitectónico (Backend)

## 1. Introducción
Este documento es la guía y paseo de arquitectura técnica ("walkthrough") para adentrarse en cómo funciona **El Impostor (Backend)**. El backend aporta un ecosistema API en formato Node.js minimalista encargado exclusivamente de proveer dinámicamente los "paquetes temáticos" (las barajas con palabras de juego). Esta separación de repositorios permite poder seguir engordando o corrigiendo palabras en el vuelo sin necesidad de recompilar y subir la app móvil Frontend a tiendas cada vez.

## 2. Stack Tecnológico
- **Entorno en Servidor**: Node.js puro usando TypeScript.
- **Protocolo Web**: Express.js sirviendo rutas por encima de Node.
- **Alojamiento (Deploy)**: Entorno en Vercel actuando de plataforma "Serverless" ("Funciones sin Servidor" levantadas por el proxy interno en la subcarpeta `/api`).
- **Base de Datos**: Colecciones en tiempo real (Realtime Database o Documentos in-file por entorno) mapeadas directamente desde el servicio de Firebase.

## 3. Estructura y Planimetría
```text
impostor-backend/
├── api/             
│   └── index.ts     # Inyector de Vercel. Exige cargar aquí la entrada en entornos Serverless ("Vercel handler")
├── src/
│   ├── config/      # Control de `.env` locales y llaves maestras de credenciales al servicio de Firebase.
│   ├── controllers/ # Lógicas de empaquetador separadas. Excluyen al router de conocer qué pasa en su interior.
│   ├── routes/      # Mapeo de URL `/ruta ->` hacia el `controller`.
│   └── index.ts     # Pista de auto-lanzamiento en ordenadores de desarrollo en local (`localhost`).
├── package.json
└── vercel.json      # Declaración de Vercel que re-escribe e intercepta URLs para que Express actúe sobre ellas.
```

## 4. Endpoints y Semántica de la API

### `GET /api/packages`
- **Función**: Consigue la bajada grupal con las listas de temáticas de palabras en base al paquete local de traducción seleccionado en las opciones de Frontend.
- **Parámetros GET**: `lang` (Un String en Query de URL, por defecto se resolverá a `'es'`). Soporta: `es`, `en`, `fr`, `ca`.
- **Estructura del Payload que expide**: Devolverá en un JSON una matriz de objetos que siguen formato Interfaz `Package`.
- **Ejemplo**:
  ```json
  [
    {
      "id": "animales",
      "name": "Mundo Animal",
      "description": "Una selva de palabras...",
      "words": [
        {"word": "León", "hint": "Rey"},
        {"word": "Serpiente", "hint": "Reptil"}
      ]
    }
  ]
  ```

## 5. Prevención, Seguridad y Middlewares (Interceptor)
1. **Control Regional (CORS - Cross-Origin Resource Sharing)**: 
   Las peticiones entrantes `OPTIONS` son cribadas activamente. Si la petición que pregunta por colecciones y palabras secretas procede de orígenes desconocidos, serán expulsadas. Solamente se permite el dominio oficial de la app Frontend deplegada en producción, pero se auto relaja temporalmente cuando la API corre explícitamente en el `localhost`.
2. **Inyección en variables Virtuales (`.env`)**:
   Los secretos del reino de Firebase que firman peticiones para la base de datos (como el Service Account JSON format) nunca viven dentro del código de este propio GIT. Se obligan a pasar como variables de terminal desde Vercel o local.

## 6. Rendimiento y Escalabilidad (Serverless Strategy)
- No hay ningún servidor funcionando 24/7 de forma pasiva vaciando dinero o memoria RAM.
- **Serverless**: Configurado a través de sub-rutas `/api` con el archivo mágico `vercel.json` ("*Todo lo pertinente redirecciónalo estático a `api/index.ts` donde vive Express escondido*"). 
- El backend puede absorber cargas o picos grandes de conexiones de jugadores pidiendo cartas y apagar la instancia inmediatamente tras resolver el JSON.

## 7. Novedades en Arquitectura (v1.1.0)
- **Compatibilidad con Tipos de Juego**: La API y las colecciones de palabras han sido abstraídas conceptualmente para que el cliente (Frontend) pueda usarlas bajo nuevos modelos semánticos (Juegos de Preguntas y Dibujo) sin colisionar con el Payload estándar.
- **Expansión de Idiomas (i18n)**: Ampliación de las respuestas JSON y recolección controlada de campos de traducción/pistas en Francés (FR) y Catalán (CA), garantizando la latencia.
- **Preparación de Nuevos Metadatos**: Integración nativa de la metadata para acomodar los nuevos paquetes activos en cliente (incluyendo Manga & Anime, Mundo Animal y Películas de Culto con sus referencias a assets 3D).
