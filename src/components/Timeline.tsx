import React from 'react';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  isCompleted?: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="relative">
      {/* Línea vertical principal */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex items-start">
            {/* Círculo del paso */}
            <div className={`
              relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 
              ${step.isCompleted 
                ? 'bg-green-500 border-green-500 text-white' 
                : 'bg-white border-blue-500 text-blue-500'
              }
              shadow-lg transition-all duration-300 hover:scale-110
            `}>
              <span className="text-2xl font-bold">{step.icon}</span>
            </div>
            
            {/* Contenido del paso */}
            <div className="ml-8 flex-1">
              <div className={`
                bg-white rounded-lg shadow-md p-6 border-l-4 
                ${step.isCompleted ? 'border-green-500' : 'border-blue-500'}
                transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1
              `}>
                <h3 className={`
                  text-xl font-bold mb-2 
                  ${step.isCompleted ? 'text-green-700' : 'text-blue-700'}
                `}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Indicador de estado */}
                {step.isCompleted && (
                  <div className="mt-3 flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Completado</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decoración final */}
      <div className="relative mt-8">
        <div className="absolute left-8 w-0.5 h-8 bg-gradient-to-b from-green-500 to-transparent"></div>
        <div className="flex items-center justify-center ml-8">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full shadow-lg">
            <span className="font-bold">¡Bienvenido a la Asociación!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;