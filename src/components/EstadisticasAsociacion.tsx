import React from 'react';

interface EstadisticasAsociacionProps {
  className?: string;
}

const EstadisticasAsociacion: React.FC<EstadisticasAsociacionProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Estadísticas */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Logros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-orange-100">Profesionales Asociados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-orange-100">Eventos Organizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-orange-100">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-orange-100">Personas Beneficiadas</div>
          </div>
        </div>
      </section>

      {/* Logros Destacados */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Logros Destacados</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Reconocimiento Provincial</h4>
              <p className="text-gray-600">Recibimos el premio "Excelencia en Nutrición" por parte del Ministerio de Salud de San Juan en 2023.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Programas Educativos</h4>
              <p className="text-gray-600">Implementamos programas de educación nutricional en escuelas y centros comunitarios de toda la provincia.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Colaboraciones Internacionales</h4>
              <p className="text-gray-600">Establecimos alianzas con organizaciones nutricionales de otros países para intercambiar conocimientos y experiencias.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Investigación Aplicada</h4>
              <p className="text-gray-600">Desarrollamos estudios sobre hábitos alimentarios locales que han contribuido a mejorar las políticas públicas de nutrición.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades Recientes */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Actividades Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-500">Diciembre 2024</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Congreso Provincial de Nutrición</h4>
            <p className="text-gray-600 text-sm">Organizamos el primer congreso provincial que reunió a más de 200 profesionales de la nutrición.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-500">Noviembre 2024</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Campaña "Nutrición Saludable"</h4>
            <p className="text-gray-600 text-sm">Lanzamos una campaña educativa en redes sociales que alcanzó a más de 10,000 personas.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-500">Octubre 2024</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Talleres en Escuelas</h4>
            <p className="text-gray-600 text-sm">Realizamos talleres de nutrición en 15 escuelas primarias de la provincia.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-500">Septiembre 2024</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Actualización Profesional</h4>
            <p className="text-gray-600 text-sm">Organizamos 8 jornadas de actualización profesional con expertos nacionales e internacionales.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstadisticasAsociacion; 