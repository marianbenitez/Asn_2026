import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const API_URL = import.meta.env.PUBLIC_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setMessageType('');

    if (!email || !password) {
      setMessage('Por favor, complete todos los campos.');
      setMessageType('error');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        setMessage(data.message || 'Inicio de sesión exitoso!');
        setMessageType('success');
        // Store token and redirect, e.g.:
        // localStorage.setItem('access_token', data.access_token);
        window.location.href = '/dashboard'; // Redirect to dashboard
        console.log('Login successful:', data);
      } else {
        // Login failed
        let errorMessage = 'Error al iniciar sesión.';
        if (response.status === 401) {
          errorMessage = data.error || 'Credenciales incorrectas.';
        } else if (response.status === 400) {
          errorMessage = data.message || 'Solicitud inválida.';
          if (data.errors) {
            // Handle validation errors from API
            const errorFields = Object.keys(data.errors).map(key => data.errors[key]);
            errorMessage = errorFields.join(' ');
          }
        } else if (response.status === 403) {
          errorMessage = data.error || 'Acceso denegado. Su cuenta podría no estar activa o ha excedido los intentos de inicio de sesión.';
        }
        setMessage(errorMessage);
        setMessageType('error');
        console.error('Login failed:', data);
      }
    } catch (error) {
      setMessage('No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.');
      setMessageType('error');
      console.error('Network error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {message && (
        <div className={`p-3 rounded-md text-sm ${messageType === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;