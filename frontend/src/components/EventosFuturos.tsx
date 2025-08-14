import React from 'react';

interface EventosFuturosProps {
  className?: string;
}

const EventosFuturos: React.FC<EventosFuturosProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Próximos Eventos */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Próximos Eventos</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">15 de Enero, 2025</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Congreso Provincial de Nutrición 2025</h4>
                <p className="text-gray-600 text-sm mb-3">
                  El evento más importante del año para profesionales de la nutrición en San Juan. 
                  Conferencias, talleres y networking con expertos nacionales e internacionales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    Presencial
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Certificación
                  </span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Gratuito para miembros
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a href="#" className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-200">
                  Inscribirse
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">22 de Enero, 2025</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Taller: Nutrición en el Deporte</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Taller práctico sobre nutrición deportiva con casos clínicos y recomendaciones específicas 
                  para diferentes disciplinas deportivas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    Presencial
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                    Cupos limitados
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a href="#" className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-200">
                  Inscribirse
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">5 de Febrero, 2025</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Webinar: Nutrición y Salud Mental</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Webinar gratuito sobre la relación entre nutrición y salud mental, con enfoque en 
                  trastornos alimentarios y bienestar emocional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Virtual
                  </span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Gratuito
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a href="#" className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-200">
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendario de Actividades */}
      <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Calendario de Actividades 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Enero</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 15: Congreso Provincial</li>
              <li>• 22: Taller Nutrición Deportiva</li>
              <li>• 29: Reunión Comisión Educación</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Febrero</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 5: Webinar Salud Mental</li>
              <li>• 12: Taller Nutrición Pediátrica</li>
              <li>• 26: Asamblea General</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Marzo</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 8: Día de la Mujer - Evento especial</li>
              <li>• 15: Taller Nutrición Geriátrica</li>
              <li>• 22: Jornada de Investigación</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Abril</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 7: Día Mundial de la Salud</li>
              <li>• 14: Taller Nutrición Comunitaria</li>
              <li>• 28: Reunión Comisión Honorarios</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Mayo</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 5: Taller Nutrición Clínica</li>
              <li>• 12: Webinar Nutrición Oncológica</li>
              <li>• 26: Jornada de Actualización</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Junio</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 2: Taller Nutrición Deportiva</li>
              <li>• 16: Webinar Nutrición Vegetariana</li>
              <li>• 30: Reunión Comisión Salud Pública</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inscripciones y Contacto */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">¿Te interesa participar?</h2>
        <p className="text-center mb-6 text-orange-100">
          Mantente informado sobre nuestros eventos y actividades. Recibe notificaciones sobre 
          nuevos eventos, talleres y oportunidades de desarrollo profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Solicitar Información
          </a>
          <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
            Suscribirse al Newsletter
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventosFuturos; 