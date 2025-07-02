// src/services/api.js

// Configuración base de la API
const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = null;
  }

  // Método helper para hacer requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Agregar token si existe
    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Métodos de autenticación
  async login(email, password) {
    const response = await this.request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.token) {
      this.token = response.token;
      // Guardar token en localStorage para persistencia
      localStorage.setItem('api_token', response.token);
    }

    return response;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('api_token');
  }

  // Cargar token desde localStorage al inicializar
  loadToken() {
    const savedToken = localStorage.getItem('api_token');
    if (savedToken) {
      this.token = savedToken;
    }
    return savedToken;
  }

  // Métodos para usuarios
  async getUsers() {
    return await this.request('/users');
  }

  async createUser(userData) {
    return await this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Métodos de testing
  async testConnection() {
    return await this.request('/test');
  }

  async testProtected() {
    return await this.request('/test/protected');
  }

  async testAdmin() {
    return await this.request('/test/admin');
  }
}

// Crear instancia singleton
const apiService = new ApiService();

// Cargar token al importar el módulo
if (typeof window !== 'undefined') {
  apiService.loadToken();
}

export default apiService;