import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calculator, FileText, Users, BookOpen, Search, Building, Home, Stethoscope } from 'lucide-react';

type NomencladorItem =
  | { name: string; units: number; amount: number }
  | { name: string; units: number; hourly: number; monthly: number | null };

type NomencladorSection = {
  title: string;
  icon: React.ReactNode;
  items: NomencladorItem[];
};

const NomencladorNutricion = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const nomencladorData: Record<string, NomencladorSection> = {
    consultorioPresencial: {
      title: "Actividad Privada en Consultorio Presencial/Online",
      icon: <Stethoscope className="w-5 h-5" />,
      items: [
        { name: "Consulta", units: 5, amount: 25000 },
        { name: "Plan Alimentario", units: 6, amount: 30000 },
        { name: "Consulta Online", units: 4, amount: 20000 },
        { name: "Módulo 8 consultas mínimo", units: 35, amount: 175000 },
        { name: "Módulos 4 consultas", units: 18, amount: 90000 },
        { name: "Soporte nutricional ambulatorio", units: 10, amount: 50000 },
        { name: "Valoración nutricional por antropometría", units: 8, amount: 40000 }
      ]
    },
    discapacidad: {
      title: "Actividad Privada - Área Discapacidad/TCA",
      icon: <Users className="w-5 h-5" />,
      items: [
        { name: "Módulo simple (4 consultas mensuales)", units: 18, amount: 90000 },
        { name: "Módulo Intensivo (8 consultas mensuales)", units: 30, amount: 150000 },
        { name: "Entrevistas interdisciplinarias (x hora)", units: 6, amount: 30000 }
      ]
    },
    domicilio: {
      title: "Atención Privada en Domicilio",
      icon: <Home className="w-5 h-5" />,
      items: [
        { name: "Consulta domicilio", units: 8, amount: 40000 },
        { name: "Módulos 4 consultas", units: 26, amount: 130000 },
        { name: "Módulos 8 consultas mínimo", units: 43, amount: 215000 }
      ]
    },
    instituciones: {
      title: "Actividad en Sanatorios, Clínicas, Hospitales",
      icon: <Building className="w-5 h-5" />,
      items: [
        { name: "40 hs semanales", units: 450, hourly: 56250, monthly: 2250000 },
        { name: "30 hs semanales", units: 350, hourly: 58333, monthly: 1750000 },
        { name: "20 hs semanales", units: 250, hourly: 62500, monthly: 1250000 },
        { name: "Valor del día (8h)", units: 30, hourly: 18750, monthly: 150000 },
        { name: "Fines de semana y feriados", units: 15, hourly: 75000, monthly: null }
      ]
    },
    organismosPublicos: {
      title: "Actividad en Organismos Públicos",
      icon: <Building className="w-5 h-5" />,
      items: [
        { name: "40 hs semanales", units: 450, hourly: 45000, monthly: 1800000 },
        { name: "30 hs semanales", units: 350, hourly: 46667, monthly: 1400000 },
        { name: "20 hs semanales", units: 250, hourly: 50000, monthly: 1000000 },
        { name: "Valor del día (8h)", units: 30, hourly: 15000, monthly: 120000 },
        { name: "Fines de semana y feriados", units: 15, hourly: 60000, monthly: null }
      ]
    },
    docencia: {
      title: "Actividad en Docencia",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { name: "Nivel secundario", units: 3, amount: 15000 },
        { name: "Nivel terciario", units: 4, amount: 20000 },
        { name: "Universitaria de grado", units: 6, amount: 30000 },
        { name: "Universitaria de posgrado", units: 10, amount: 50000 },
        { name: "Educativa comunitaria secuencial (≤50 personas)", units: 6, amount: 30000 },
        { name: "Educativa comunitaria ocasional (≤50 personas)", units: 8, amount: 40000 },
        { name: "Grupos específicos secuencial (≤50 personas)", units: 9, amount: 45000 },
        { name: "Grupos específicos ocasional (≤50 personas)", units: 7, amount: 35000 }
      ]
    },
    investigacion: {
      title: "Actividad en Investigación",
      icon: <Search className="w-5 h-5" />,
      items: [
        { name: "Coordinador/Director", units: 500, amount: 2500000 },
        { name: "Asesor", units: 400, amount: 2000000 },
        { name: "Investigador principal", units: 320, amount: 1600000 },
        { name: "Investigador asociado", units: 300, amount: 1500000 },
        { name: "Investigador colaborador", units: 260, amount: 1300000 },
        { name: "Investigador junior", units: 230, amount: 1150000 },
        { name: "Colaborador en proyectos", units: 200, amount: 1000000 }
      ]
    },
    direccionTecnica: {
      title: "Dirección Técnica de Alimentos",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { name: "Dirección técnica 20 hs semanales", units: 300, amount: 1500000 },
        { name: "Dirección técnica 30 hs semanales", units: 400, amount: 2000000 },
        { name: "Dirección técnica 40 hs semanales", units: 500, amount: 2500000 },
        { name: "Asesorías", units: 250, amount: 1250000 },
        { name: "Capacitador (carnet manipulación)", units: 6, amount: 30000 },
        { name: "Inscripción RNE - RNPA", units: 300, amount: 1500000 },
        { name: "Reinscripción RNE/RNPA", units: 200, amount: 1000000 },
        { name: "Rotulado nutricional básico", units: 250, amount: 1250000 },
        { name: "Desarrollo de producto alimenticio", units: 500, amount: 2500000 }
      ]
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredData = Object.entries(nomencladorData).filter(([key, section]) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return section.title.toLowerCase().includes(searchLower) ||
      section.items.some(item => item.name.toLowerCase().includes(searchLower));
  });

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Define the ASMENUT value (replace with the correct value if needed)
  const asmenutValue = 5000;

  return (
    <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
      <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Nomenclador HME - Nutrición</h1>
          <div className="text-right">
            <p className="text-sm text-gray-600">Junio 2025 - ASN</p>
            <p className="text-lg font-semibold text-blue-600">
              Valor ASMENUT: {formatCurrency(asmenutValue)}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredData.map(([key, section]) => (
            <div key={key} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div
                className="p-4 text-white transition-all duration-200 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                onClick={() => toggleSection(key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                  </div>
                  {expandedSections[key] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {expandedSections[key] && (
                <div className="p-4 bg-gray-50">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-medium text-left text-gray-700">Servicio</th>
                        <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Unidades ASMENUT</th>
                        <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Honorario</th>
                        {section.items.some(item => 'hourly' in item && item.hourly !== undefined) && (
                          <>
                            <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Por Hora</th>
                            <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Mensual</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {section.items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-center text-gray-600">{item.units}</td>
                          <td className="px-4 py-3 text-sm font-medium text-right text-gray-900">
                            {'amount' in item && item.amount ? formatCurrency(item.amount) : ''}
                          </td>
                          {'hourly' in item && item.hourly !== undefined && (
                            <>
                              <td className="px-4 py-3 text-sm text-right text-gray-600">
                                {formatCurrency(item.hourly)}
                              </td>
                              <td className="px-4 py-3 text-sm font-medium text-right text-gray-900">
                                {item.monthly !== null && item.monthly !== undefined ? formatCurrency(item.monthly) : ''}
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 mt-8 rounded-lg bg-blue-50">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">Notas Importantes:</h3>
          <ul className="space-y-1 text-sm text-blue-700">
            <li>• Los valores están expresados en pesos argentinos</li>
            <li>• Los módulos pueden incluir anamnesis y controles</li>
            <li>• Para consultas domiciliarias se debe sumar costo de viáticos</li>
            <li>• Los valores en organismos públicos tienen incrementos por antigüedad</li>
            <li>• Con posgrado o especialidad: 10% adicional, con maestría o doctorado: 15% adicional</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NomencladorNutricion;