import React from 'react';

interface JuntaDirectivaProps {
  className?: string;
}

const JuntaDirectiva: React.FC<JuntaDirectivaProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Junta Directiva */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Junta Directiva</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Dra. María González</h4>
            <p className="text-orange-600 font-medium mb-2">Presidente</p>
            <p className="text-gray-600 text-sm">Licenciada en Nutrición con especialización en Nutrición Clínica</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Lic. Carlos Rodríguez</h4>
            <p className="text-orange-600 font-medium mb-2">Vicepresidente</p>
            <p className="text-gray-600 text-sm">Especialista en Nutrición Deportiva y Educación Nutricional</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Lic. Ana Martínez</h4>
            <p className="text-orange-600 font-medium mb-2">Secretaria</p>
            <p className="text-gray-600 text-sm">Experta en Nutrición Pediátrica y Salud Pública</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Lic. Pedro López</h4>
            <p className="text-orange-600 font-medium mb-2">Tesorero</p>
            <p className="text-gray-600 text-sm">Especialista en Gestión de Servicios de Nutrición</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Lic. Laura Fernández</h4>
            <p className="text-orange-600 font-medium mb-2">Vocal</p>
            <p className="text-gray-600 text-sm">Investigadora en Nutrición Comunitaria</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Lic. Roberto Silva</h4>
            <p className="text-orange-600 font-medium mb-2">Vocal</p>
            <p className="text-gray-600 text-sm">Especialista en Nutrición Geriátrica</p>
          </div>
        </div>
      </section>

      {/* Comisiones de Trabajo */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Comisiones de Trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Comisión de Educación</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Organiza eventos educativos, talleres y capacitaciones para profesionales.</p>
            <p className="text-orange-600 text-sm font-medium">Coordinadora: Lic. Carmen Ruiz</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Comisión de Investigación</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Promueve y coordina proyectos de investigación en nutrición.</p>
            <p className="text-orange-600 text-sm font-medium">Coordinador: Dr. Miguel Torres</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Comisión de Salud Pública</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Desarrolla programas de promoción de la salud nutricional.</p>
            <p className="text-orange-600 text-sm font-medium">Coordinadora: Lic. Patricia Morales</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Comisión de Honorarios</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Establece y actualiza los honorarios mínimos profesionales.</p>
            <p className="text-orange-600 text-sm font-medium">Coordinador: Lic. Diego Herrera</p>
          </div>
        </div>
      </section>

      {/* Membresía */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Tipos de Membresía</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Miembro Activo</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Licenciados en Nutrición</li>
              <li>• Voto en asambleas</li>
              <li>• Acceso a todos los eventos</li>
              <li>• Descuentos en capacitaciones</li>
              <li>• Publicación en directorio</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Miembro Adherente</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Estudiantes de Nutrición</li>
              <li>• Participación en eventos</li>
              <li>• Acceso a recursos educativos</li>
              <li>• Descuentos especiales</li>
              <li>• Mentoría profesional</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Miembro Honorario</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Profesionales destacados</li>
              <li>• Contribución excepcional</li>
              <li>• Membresía gratuita</li>
              <li>• Reconocimiento especial</li>
              <li>• Participación en comisiones</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuntaDirectiva; 