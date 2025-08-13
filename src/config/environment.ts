// config/environment.ts
export const environment = {
  // URL de la API - cambiar según el entorno
  API_URL: import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api',
  
  // Modo debug
  DEBUG: import.meta.env.PUBLIC_DEBUG === 'true' || false,
  
  // Entorno
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  
  // Configuración de desarrollo
  IS_DEV: import.meta.env.DEV || false,
  IS_PROD: import.meta.env.PROD || false,
};

// Configuración específica por entorno
export const config = {
  development: {
    API_URL: 'http://localhost:8080/api',
    DEBUG: true,
  },
  production: {
    API_URL: 'https://tu-dominio.com/api',
    DEBUG: false,
  },
};

// Obtener configuración según el entorno
export const getConfig = () => {
  const env = environment.NODE_ENV || 'development';
  return {
    ...config[env as keyof typeof config],
    ...environment,
  };
};

export default environment; 