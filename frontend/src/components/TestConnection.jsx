// src/components/TestConnection.jsx
import { useState, useEffect } from 'react';
import apiService from '../services/api.js';

export default function TestConnection() {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  useEffect(() => {
    // Verificar si hay token guardado
    const token = apiService.loadToken();
    setIsLoggedIn(!!token);
  }, []);

  const testBasicConnection = async () => {
    setStatus('testing');
    setError(null);
    
    try {
      const response = await apiService.testConnection();
      setResult(response);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  const testProtectedEndpoint = async () => {
    setStatus('testing');
    setError(null);
    
    try {
      const response = await apiService.testProtected();
      setResult(response);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('testing');
    setError(null);
    
    try {
      const response = await apiService.login(loginForm.email, loginForm.password);
      setResult(response);
      setStatus('success');
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  const handleLogout = () => {
    apiService.logout();
    setIsLoggedIn(false);
    setResult(null);
    setStatus('idle');
  };

  const getUsers = async () => {
    setStatus('testing');
    setError(null);
    
    try {
      const response = await apiService.getUsers();
      setResult(response);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Test API Connection
      </h2>

      {/* Estado de conexión */}
      <div className="mb-6 p-4 rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Estado de conexión:</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            status === 'success' ? 'bg-green-500' : 
            status === 'error' ? 'bg-red-500' : 
            status === 'testing' ? 'bg-yellow-500' : 'bg-gray-300'
          }`}></div>
          <span className="capitalize">{status}</span>
        </div>
      </div>

      {/* Formulario de login */}
      {!isLoggedIn && (
        <div className="mb-6 p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Login</h3>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              disabled={status === 'testing'}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {status === 'testing' ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      )}

      {/* Estado de login */}
      {isLoggedIn && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-green-700">✓ Logged in</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Botones de prueba */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <button
          onClick={testBasicConnection}
          disabled={status === 'testing'}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Test Basic Connection
        </button>
        
        <button
          onClick={testProtectedEndpoint}
          disabled={status === 'testing' || !isLoggedIn}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Test Protected Endpoint
        </button>

        <button
          onClick={getUsers}
          disabled={status === 'testing' || !isLoggedIn}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
        >
          Get Users
        </button>
      </div>

      {/* Resultados */}
      {result && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold mb-2 text-green-800">Resultado:</h3>
          <pre className="text-sm text-green-700 whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {/* Errores */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="font-semibold mb-2 text-red-800">Error:</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Estado de loading */}
      {status === 'testing' && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2">Testing connection...</span>
        </div>
      )}
    </div>
  );
}