import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    setIsLoading(true);

    if (!email || !password) {
      setMessage('Por favor, complete todos los campos.');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(email, password);
      
      if (result.success) {
        setMessage('Inicio de sesión exitoso!');
        setMessageType('success');
        
        // Clear form
        setEmail('');
        setPassword('');
        
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        setMessage(result.error || 'Error al iniciar sesión.');
        setMessageType('error');
      }
    } catch (error) {
      let errorMessage = 'Error al iniciar sesión.';

      if (error instanceof Error) {
        const errMsg = error.message;
        if (errMsg.includes('401') || errMsg.includes('Unauthorized')) {
          errorMessage = 'Credenciales incorrectas. Verifique su email y contraseña.';
        } else if (errMsg.includes('403') || errMsg.includes('Forbidden')) {
          errorMessage = 'Acceso denegado. Su cuenta podría no estar activa.';
        } else if (errMsg.includes('500') || errMsg.includes('Internal Server Error')) {
          errorMessage = 'Error del servidor. Inténtalo de nuevo más tarde.';
        } else if (errMsg.includes('Network') || errMsg.includes('fetch')) {
          errorMessage = 'No se pudo conectar con el servidor. Verifique su conexión.';
        } else {
          errorMessage = errMsg || 'Error inesperado. Inténtalo de nuevo.';
        }
      } else {
        errorMessage = 'Error inesperado. Inténtalo de nuevo.';
      }

      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm"
          style={{ '--tw-ring-color': '#ff7b00' } as React.CSSProperties}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm"
          style={{ '--tw-ring-color': '#ff7b00' } as React.CSSProperties}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      
      {message && (
        <div className={`p-3 rounded-md text-sm ${
          messageType === 'error' 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-green-100 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          style={{ 
            backgroundColor: '#ff7b00',
            '--tw-ring-color': '#ff7b00'
          } as React.CSSProperties}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 border-b-2 border-white rounded-full animate-spin"></div>
              Iniciando sesión...
            </div>
          ) : (
            'Iniciar Sesión'
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;