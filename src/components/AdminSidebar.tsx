import React, { useState } from 'react';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Usuarios', icon: '👥' },
    { id: 'members', label: 'Socios', icon: '🏆' },
    { id: 'payments', label: 'Pagos', icon: '💳' },
    { id: 'content', label: 'Contenido', icon: '📝' },
    { id: 'reports', label: 'Reportes', icon: '📈' },
    { id: 'settings', label: 'Configuración', icon: '⚙️' },
  ];

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-blue-400">Admin Panel</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
              activeSection === item.id ? 'bg-blue-600 border-r-4 border-blue-400' : ''
            }`}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {!isCollapsed && (
              <span className="font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* User Info */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-400">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;