// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import apiService from '../services/api.js';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Verificar si hay token guardado al cargar
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      apiService.setAuthToken(token);
      // Opcional: verificar token con el servidor
      // verifyToken();
    }
  }, []);

  const login = async (email, password) => {
    const credentials = { email, password };
    setLoading(true);
    setError('');

    try {
      const response = await apiService.login(credentials);
      
      if (response.success) {
        setUser(response.user);
        
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          apiService.setAuthToken(response.token);
        }
        
        return { success: true, user: response.user };
      } else {
        setError(response.message || 'Error en el login');
        return { success: false, error: response.message };
      }
    } catch (err) {
      let errorMessage = 'Error de conexión';
      if (err instanceof Error) {
        errorMessage += ': ' + err.message;
      }
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } catch (err) {
      console.error('Error en logout:', err);
    } finally {
      setUser(null);
      localStorage.removeItem('authToken');
      apiService.setAuthToken(null);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError('');

    try {
      const response = await apiService.register(userData);
      
      if (response.success) {
        return { success: true, message: response.message };
      } else {
        setError(response.message || 'Error en el registro');
        return { success: false, error: response.message };
      }
    } catch (err) {
      const errorMessage = 'Error de conexión: ' + err.message;
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!user
  };
}