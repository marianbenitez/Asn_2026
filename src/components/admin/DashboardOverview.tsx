import React from 'react';

const DashboardOverview: React.FC = () => {
  const stats = [
    { label: 'Total Usuarios', value: '1,234', change: '+12%', icon: '👥', color: 'blue' },
    { label: 'Socios Activos', value: '856', change: '+8%', icon: '🏆', color: 'green' },
    { label: 'Pagos del Mes', value: '$45,230', change: '+15%', icon: '💰', color: 'yellow' },
    { label: 'Nuevos Registros', value: '23', change: '+5%', icon: '📈', color: 'purple' },
  ];

  const recentActivities = [
    { id: 1, action: 'Nuevo usuario registrado', user: 'María González', time: 'Hace 5 min' },
    { id: 2, action: 'Pago procesado', user: 'Carlos López', time: 'Hace 15 min' },
    { id: 3, action: 'Solicitud de asociación', user: 'Ana Martínez', time: 'Hace 30 min' },
    { id: 4, action: 'Actualización de perfil', user: 'Luis Rodríguez', time: 'Hace 1 hora' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-100',
      green: 'bg-green-500 text-green-100',
      yellow: 'bg-yellow-500 text-yellow-100',
      purple: 'bg-purple-500 text-purple-100',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-600">
          Última actualización: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(stat.color)}`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Registros por Mes</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-600">Gráfico de registros mensuales</p>
              <p className="text-sm text-gray-500">Integración con Chart.js pendiente</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            Ver todas las actividades →
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">👤</span>
            <div className="text-left">
              <p className="font-medium">Crear Usuario</p>
              <p className="text-sm text-gray-600">Agregar nuevo usuario al sistema</p>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">📧</span>
            <div className="text-left">
              <p className="font-medium">Enviar Newsletter</p>
              <p className="text-sm text-gray-600">Comunicación masiva a socios</p>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">📊</span>
            <div className="text-left">
              <p className="font-medium">Generar Reporte</p>
              <p className="text-sm text-gray-600">Exportar datos del sistema</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;