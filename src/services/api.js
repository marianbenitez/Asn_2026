// src/services/api.js - Versión simplificada sin archivo env.ts

// Verificar que las variables de entorno estén disponibles
console.log('Environment variables:', {
  PUBLIC_API_URL: import.meta.env.PUBLIC_API_URL,
  PUBLIC_DEBUG: import.meta.env.PUBLIC_DEBUG
});

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api';
const DEBUG = import.meta.env.PUBLIC_DEBUG === 'true' || false;

class ApiService {
  constructor() {
    this.baseURL = API_URL;
    this.debug = DEBUG;
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      if (this.debug) {
        console.error('API Error:', error);
      }
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Métodos específicos para autenticación
  async login(credentials) {
    try {
      const response = await this.post('/auth/login', credentials);
      
      // Si el login es exitoso, puedes guardar el token
      if (response.token) {
        // Guardar token en localStorage o sessionStorage si es necesario
        // localStorage.setItem('authToken', response.token);
      }
      
      return response;
    } catch (error) {
      if (this.debug) {
        console.error('Login error:', error);
      }
      throw error;
    }
  }

  async logout() {
    try {
      const response = await this.post('/auth/logout');
      
      // Limpiar token almacenado
      // localStorage.removeItem('authToken');
      
      return response;
    } catch (error) {
      if (this.debug) {
        console.error('Logout error:', error);
      }
      throw error;
    }
  }

  async register(userData) {
    try {
      return await this.post('/auth/register', userData);
    } catch (error) {
      if (this.debug) {
        console.error('Register error:', error);
      }
      throw error;
    }
  }

  // Método para configurar token de autorización
  setAuthToken(token) {
    this.authToken = token;
  }

  // Sobrescribir el método request para incluir token de autorización
  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      
      // Agregar token de autorización si existe
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      if (this.authToken) {
        headers['Authorization'] = `Bearer ${this.authToken}`;
      }
      
      if (this.debug) {
        console.log('Making request to:', url, { ...options, headers });
      }
      
      const response = await fetch(url, {
        ...options,
        headers,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (this.debug) {
        console.log('Response received:', data);
      }
      
      return data;
    } catch (error) {
      if (this.debug) {
        console.error('API Error:', error);
      }
      throw error;
    }
  }
}

export default new ApiService();