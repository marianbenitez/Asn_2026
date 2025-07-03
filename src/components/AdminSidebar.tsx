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
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col relative`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold" style={{ color: '#ff7b00' }}>Admin Panel</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            title={isCollapsed ? 'Expandir' : 'Contraer'}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-6 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
              activeSection === item.id ? 'border-r-4' : ''
            }`}
            style={{
              backgroundColor: activeSection === item.id ? '#ff7b00' : 'transparent',
              borderRightColor: activeSection === item.id ? '#ff7b00' : 'transparent'
            }}
            title={isCollapsed ? item.label : ''}
          >
            <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
            {!isCollapsed && (
              <span className="font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* User Info - Fixed at bottom */}
      <div className="flex-shrink-0 p-4 border-t border-gray-700">
        {!isCollapsed ? (
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ff7b00' }}>
                <span className="text-white font-bold">A</span>
              </div>
              <div className="ml-3 min-w-0">
                <p className="text-sm font-medium text-white truncate">Administrador</p>
                <p className="text-xs text-gray-400 truncate">Sistema Admin</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <button className="w-full text-left text-xs text-gray-400 hover:text-white transition-colors">
                Cerrar Sesión
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff7b00' }}>
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;