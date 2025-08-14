import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Calculator, FileText, Users, BookOpen, Search, Building, Home, Stethoscope } from 'lucide-react';
import apiService from '../services/api.js';

interface Servicio {
  id: number;
  nombre: string;
  unidades_asmenut: number;
  monto_fijo?: number;
  monto_por_hora?: number;
  monto_mensual?: number;
  monto_calculado: number;
}

interface Categoria {
  id: number;
  nombre: string;
  icono: string;
  descripcion?: string;
  servicios: Servicio[];
}

interface HonorariosData {
  valor_asmenut: number;
  categorias: Categoria[];
}

const NomencladorNutricion = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [honorariosData, setHonorariosData] = useState<HonorariosData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mapeo de iconos
  const iconMap: Record<string, React.ReactNode> = {
    'stethoscope': <Stethoscope className="w-5 h-5" />,
    'users': <Users className="w-5 h-5" />,
    'home': <Home className="w-5 h-5" />,
    'building': <Building className="w-5 h-5" />,
    'book-open': <BookOpen className="w-5 h-5" />,
    'search': <Search className="w-5 h-5" />,
    'file-text': <FileText className="w-5 h-5" />,
    'calculator': <Calculator className="w-5 h-5" />
  };

  useEffect(() => {
    loadHonorarios();
  }, []);

  const loadHonorarios = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await apiService.get('/honorarios');
      
      if (response.success) {
        setHonorariosData(response);
      } else {
        setError('Error al cargar los honorarios');
      }
    } catch (err) {
      console.error('Error loading honorarios:', err);
      setError('Error de conexión al cargar los honorarios');
    } finally {
      setLoading(false);
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

  const filteredData = honorariosData?.categorias.filter(categoria => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return categoria.nombre.toLowerCase().includes(searchLower) ||
      categoria.servicios.some(servicio => servicio.nombre.toLowerCase().includes(searchLower));
  }) || [];

  const toggleSection = (categoriaId: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoriaId]: !prev[categoriaId]
    }));
  };

  if (loading) {
    return (
      <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border-b-2 border-blue-600 rounded-full animate-spin"></div>
            <span className="text-gray-600">Cargando honorarios...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800 mb-2">Error</h2>
          <p className="text-red-700">{error}</p>
          <button 
            onClick={loadHonorarios}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!honorariosData) {
    return (
      <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">Sin datos</h2>
          <p className="text-yellow-700">No se encontraron datos de honorarios.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
      <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Nomenclador HME - Nutrición</h1>
          <div className="text-right">
            <p className="text-sm text-gray-600">Junio 2025 - ASN</p>
            <p className="text-lg font-semibold text-blue-600">
              Valor ASMENUT: {formatCurrency(honorariosData.valor_asmenut)}
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
          {filteredData.map((categoria) => (
            <div key={categoria.id} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div
                className="p-4 text-white transition-all duration-200 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                onClick={() => toggleSection(categoria.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {iconMap[categoria.icono] || <Calculator className="w-5 h-5" />}
                    <h2 className="text-lg font-semibold">{categoria.nombre}</h2>
                  </div>
                  {expandedSections[categoria.id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {expandedSections[categoria.id] && (
                <div className="p-4 bg-gray-50">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-medium text-left text-gray-700">Servicio</th>
                        <th className="px-4 py-2 text-sm font-medium text-center text-gray-700">Unidades ASMENUT</th>
                        <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Honorario</th>
                        {categoria.servicios.some(servicio => servicio.monto_por_hora !== undefined) && (
                          <>
                            <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Por Hora</th>
                            <th className="px-4 py-2 text-sm font-medium text-right text-gray-700">Mensual</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {categoria.servicios.map((servicio) => (
                        <tr key={servicio.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">{servicio.nombre}</td>
                          <td className="px-4 py-3 text-sm text-center text-gray-600">{servicio.unidades_asmenut}</td>
                          <td className="px-4 py-3 text-sm font-medium text-right text-gray-900">
                            {servicio.monto_fijo ? formatCurrency(servicio.monto_fijo) : formatCurrency(servicio.monto_calculado)}
                          </td>
                          {categoria.servicios.some(s => s.monto_por_hora !== undefined) && (
                            <>
                              <td className="px-4 py-3 text-sm text-right text-gray-600">
                                {servicio.monto_por_hora ? formatCurrency(servicio.monto_por_hora) : ''}
                              </td>
                              <td className="px-4 py-3 text-sm font-medium text-right text-gray-900">
                                {servicio.monto_mensual ? formatCurrency(servicio.monto_mensual) : ''}
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