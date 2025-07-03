// config/env.ts
export const env = {
  API_URL: import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api',
  DEBUG: import.meta.env.PUBLIC_DEBUG === 'true' || false,
  // Agrega otras variables que necesites
};

// Para desarrollo
export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;

// Exportación por defecto
export default env;