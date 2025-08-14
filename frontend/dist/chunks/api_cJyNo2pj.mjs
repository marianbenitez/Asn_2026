const environment = {
  // URL de la API - cambiar según el entorno
  API_URL: "http://localhost:8080/api",
  // Modo debug
  DEBUG: true,
  // Entorno
  NODE_ENV: process.env.NODE_ENV || "development",
  // Configuración de desarrollo
  IS_DEV: false,
  IS_PROD: true
};
const config$1 = {
  development: {
    API_URL: "http://localhost:8080/api",
    DEBUG: true
  },
  production: {
    API_URL: "https://tu-dominio.com/api",
    DEBUG: false
  }
};
const getConfig = () => {
  const env = environment.NODE_ENV;
  return {
    ...config$1[env],
    ...environment
  };
};

// src/services/api.js

const config = getConfig();
const API_URL = config.API_URL;
const DEBUG = config.DEBUG;

class ApiService {
  constructor() {
    this.baseURL = API_URL;
    this.debug = DEBUG;
    this.authToken = null;
  }

  // Método para configurar token de autorización
  setAuthToken(token) {
    this.authToken = token;
  }

  // Método para cargar token desde localStorage
  loadToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authToken = token;
    }
    return token;
  }

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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
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
      const response = await this.post('/login', credentials);
      
      // Si el login es exitoso, guardar el token
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        this.setAuthToken(response.token);
      }
      
      return {
        success: true,
        message: response.message,
        token: response.token,
        user: response.user || null
      };
    } catch (error) {
      if (this.debug) {
        console.error('Login error:', error);
      }
      throw error;
    }
  }

  async logout() {
    try {
      // Limpiar token almacenado
      localStorage.removeItem('authToken');
      this.setAuthToken(null);
      
      return { success: true, message: 'Logout successful' };
    } catch (error) {
      if (this.debug) {
        console.error('Logout error:', error);
      }
      throw error;
    }
  }

  async register(userData) {
    try {
      return await this.post('/users', userData);
    } catch (error) {
      if (this.debug) {
        console.error('Register error:', error);
      }
      throw error;
    }
  }

  // Métodos de testing
  async testConnection() {
    return this.get('/test');
  }

  async testProtected() {
    return this.get('/test/protected');
  }

  async getUsers() {
    return this.get('/users');
  }

  // Métodos para noticias
  async getNews(page = 1, limit = 10, search = '') {
    const params = new URLSearchParams();
    if (page) params.append('page', page);
    if (limit) params.append('limit', limit);
    if (search) params.append('search', search);
    
    return this.get(`/news?${params.toString()}`);
  }

  async getFeaturedNews(limit = 3) {
    return this.get(`/news/featured?limit=${limit}`);
  }

  async getRecentNews(limit = 5) {
    return this.get(`/news/recent?limit=${limit}`);
  }

  async getNewsDetail(slug) {
    return this.get(`/news/${slug}`);
  }

  // Métodos de administración de noticias (requieren autenticación)
  async getAdminNews(page = 1, limit = 10, search = '') {
    const params = new URLSearchParams();
    if (page) params.append('page', page);
    if (limit) params.append('limit', limit);
    if (search) params.append('search', search);
    
    return this.get(`/admin/news?${params.toString()}`);
  }

  async createNews(formData) {
    // Para subir archivos, no usar JSON
    return this.request('/admin/news', {
      method: 'POST',
      body: formData,
      headers: {
        // No establecer Content-Type para FormData
        'Authorization': this.authToken ? `Bearer ${this.authToken}` : undefined
      }
    });
  }

  async updateNews(id, formData) {
    return this.request(`/admin/news/${id}`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Authorization': this.authToken ? `Bearer ${this.authToken}` : undefined
      }
    });
  }

  async deleteNews(id) {
    return this.delete(`/admin/news/${id}`);
  }
}

const apiService = new ApiService();

export { apiService as a };
