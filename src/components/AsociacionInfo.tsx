import React from 'react';

interface AsociacionInfoProps {
  className?: string;
}

const AsociacionInfo: React.FC<AsociacionInfoProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Historia */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Nuestra Historia</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La Asociación Sanjuanina de Nutrición (ASN) nació en 2010 con el objetivo de unir a los profesionales 
          de la nutrición de San Juan en una organización que promueva la excelencia profesional y el compromiso 
          con la salud de la comunidad.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Desde nuestros inicios, hemos trabajado incansablemente para establecer estándares de calidad en la 
          práctica nutricional y para crear espacios de intercambio profesional que enriquezcan nuestra práctica diaria.
        </p>
      </section>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <h3 className="text-xl font-bold mb-3 text-orange-500">Nuestra Misión</h3>
          <p className="text-gray-700 leading-relaxed">
            Promover la salud y el bienestar de la comunidad sanjuanina a través de la excelencia en la práctica 
            nutricional, la educación continua y la investigación aplicada, contribuyendo al desarrollo de 
            políticas públicas que mejoren la calidad de vida de nuestra población.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <h3 className="text-xl font-bold mb-3 text-orange-500">Nuestra Visión</h3>
          <p className="text-gray-700 leading-relaxed">
            Ser la organización líder en nutrición de San Juan, reconocida por su excelencia profesional, 
            innovación en la práctica clínica y compromiso con la salud pública, siendo referente a nivel 
            regional en el desarrollo de estrategias nutricionales efectivas.
          </p>
        </div>
      </div>

      {/* Valores */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Excelencia Profesional</h4>
            <p className="text-sm text-gray-600">Mantenemos los más altos estándares en nuestra práctica diaria</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Compromiso Social</h4>
            <p className="text-sm text-gray-600">Trabajamos por el bienestar de toda la comunidad</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Educación Continua</h4>
            <p className="text-sm text-gray-600">Nos actualizamos constantemente en las últimas investigaciones</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Trabajo en Equipo</h4>
            <p className="text-sm text-gray-600">Colaboramos para lograr mejores resultados</p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Nuestros Objetivos</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Promover la Excelencia Profesional</h4>
              <p className="text-gray-600 text-sm">Establecer y mantener estándares de calidad en la práctica nutricional</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Fomentar la Educación Continua</h4>
              <p className="text-gray-600 text-sm">Organizar eventos, talleres y capacitaciones para nuestros miembros</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Contribuir a la Salud Pública</h4>
              <p className="text-gray-600 text-sm">Desarrollar programas y campañas de educación nutricional</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Fortalecer la Investigación</h4>
              <p className="text-gray-600 text-sm">Promover estudios y proyectos de investigación en nutrición</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsociacionInfo; 