<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class HonorariosSeeder extends Seeder
{
    public function run()
    {
        // Crear configuración inicial
        $configuracionModel = new \App\Models\HonorariosConfiguracionModel();
        $configuracionModel->insert([
            'valor_asmenut' => 5000,
            'fecha_vigencia' => '2025-01-01',
            'descripcion' => 'Configuración inicial - Junio 2025',
            'activo' => 1
        ]);

        // Crear categorías
        $categoriaModel = new \App\Models\HonorariosCategoriaModel();
        $servicioModel = new \App\Models\HonorariosServicioModel();

        $categorias = [
            [
                'nombre' => 'Actividad Privada en Consultorio Presencial/Online',
                'icono' => 'stethoscope',
                'descripcion' => 'Servicios de consulta privada',
                'orden' => 1,
                'servicios' => [
                    ['nombre' => 'Consulta', 'unidades_asmenut' => 5, 'monto_fijo' => 25000],
                    ['nombre' => 'Plan Alimentario', 'unidades_asmenut' => 6, 'monto_fijo' => 30000],
                    ['nombre' => 'Consulta Online', 'unidades_asmenut' => 4, 'monto_fijo' => 20000],
                    ['nombre' => 'Módulo 8 consultas mínimo', 'unidades_asmenut' => 35, 'monto_fijo' => 175000],
                    ['nombre' => 'Módulos 4 consultas', 'unidades_asmenut' => 18, 'monto_fijo' => 90000],
                    ['nombre' => 'Soporte nutricional ambulatorio', 'unidades_asmenut' => 10, 'monto_fijo' => 50000],
                    ['nombre' => 'Valoración nutricional por antropometría', 'unidades_asmenut' => 8, 'monto_fijo' => 40000]
                ]
            ],
            [
                'nombre' => 'Actividad Privada - Área Discapacidad/TCA',
                'icono' => 'users',
                'descripcion' => 'Servicios especializados en discapacidad',
                'orden' => 2,
                'servicios' => [
                    ['nombre' => 'Módulo simple (4 consultas mensuales)', 'unidades_asmenut' => 18, 'monto_fijo' => 90000],
                    ['nombre' => 'Módulo Intensivo (8 consultas mensuales)', 'unidades_asmenut' => 30, 'monto_fijo' => 150000],
                    ['nombre' => 'Entrevistas interdisciplinarias (x hora)', 'unidades_asmenut' => 6, 'monto_fijo' => 30000]
                ]
            ],
            [
                'nombre' => 'Atención Privada en Domicilio',
                'icono' => 'home',
                'descripcion' => 'Servicios a domicilio',
                'orden' => 3,
                'servicios' => [
                    ['nombre' => 'Consulta domicilio', 'unidades_asmenut' => 8, 'monto_fijo' => 40000],
                    ['nombre' => 'Módulos 4 consultas', 'unidades_asmenut' => 26, 'monto_fijo' => 130000],
                    ['nombre' => 'Módulos 8 consultas mínimo', 'unidades_asmenut' => 43, 'monto_fijo' => 215000]
                ]
            ],
            [
                'nombre' => 'Actividad en Sanatorios, Clínicas, Hospitales',
                'icono' => 'building',
                'descripcion' => 'Servicios en instituciones privadas',
                'orden' => 4,
                'servicios' => [
                    ['nombre' => '40 hs semanales', 'unidades_asmenut' => 450, 'monto_por_hora' => 56250, 'monto_mensual' => 2250000],
                    ['nombre' => '30 hs semanales', 'unidades_asmenut' => 350, 'monto_por_hora' => 58333, 'monto_mensual' => 1750000],
                    ['nombre' => '20 hs semanales', 'unidades_asmenut' => 250, 'monto_por_hora' => 62500, 'monto_mensual' => 1250000],
                    ['nombre' => 'Valor del día (8h)', 'unidades_asmenut' => 30, 'monto_por_hora' => 18750, 'monto_mensual' => 150000],
                    ['nombre' => 'Fines de semana y feriados', 'unidades_asmenut' => 15, 'monto_por_hora' => 75000, 'monto_mensual' => null]
                ]
            ],
            [
                'nombre' => 'Actividad en Organismos Públicos',
                'icono' => 'building',
                'descripcion' => 'Servicios en instituciones públicas',
                'orden' => 5,
                'servicios' => [
                    ['nombre' => '40 hs semanales', 'unidades_asmenut' => 450, 'monto_por_hora' => 45000, 'monto_mensual' => 1800000],
                    ['nombre' => '30 hs semanales', 'unidades_asmenut' => 350, 'monto_por_hora' => 46667, 'monto_mensual' => 1400000],
                    ['nombre' => '20 hs semanales', 'unidades_asmenut' => 250, 'monto_por_hora' => 50000, 'monto_mensual' => 1000000],
                    ['nombre' => 'Valor del día (8h)', 'unidades_asmenut' => 30, 'monto_por_hora' => 15000, 'monto_mensual' => 120000],
                    ['nombre' => 'Fines de semana y feriados', 'unidades_asmenut' => 15, 'monto_por_hora' => 60000, 'monto_mensual' => null]
                ]
            ],
            [
                'nombre' => 'Actividad en Docencia',
                'icono' => 'book-open',
                'descripcion' => 'Servicios de docencia',
                'orden' => 6,
                'servicios' => [
                    ['nombre' => 'Nivel secundario', 'unidades_asmenut' => 3, 'monto_fijo' => 15000],
                    ['nombre' => 'Nivel terciario', 'unidades_asmenut' => 4, 'monto_fijo' => 20000],
                    ['nombre' => 'Universitaria de grado', 'unidades_asmenut' => 6, 'monto_fijo' => 30000],
                    ['nombre' => 'Universitaria de posgrado', 'unidades_asmenut' => 10, 'monto_fijo' => 50000],
                    ['nombre' => 'Educativa comunitaria secuencial (≤50 personas)', 'unidades_asmenut' => 6, 'monto_fijo' => 30000],
                    ['nombre' => 'Educativa comunitaria ocasional (≤50 personas)', 'unidades_asmenut' => 8, 'monto_fijo' => 40000],
                    ['nombre' => 'Grupos específicos secuencial (≤50 personas)', 'unidades_asmenut' => 9, 'monto_fijo' => 45000],
                    ['nombre' => 'Grupos específicos ocasional (≤50 personas)', 'unidades_asmenut' => 7, 'monto_fijo' => 35000]
                ]
            ],
            [
                'nombre' => 'Actividad en Investigación',
                'icono' => 'search',
                'descripcion' => 'Servicios de investigación',
                'orden' => 7,
                'servicios' => [
                    ['nombre' => 'Coordinador/Director', 'unidades_asmenut' => 500, 'monto_fijo' => 2500000],
                    ['nombre' => 'Asesor', 'unidades_asmenut' => 400, 'monto_fijo' => 2000000],
                    ['nombre' => 'Investigador principal', 'unidades_asmenut' => 320, 'monto_fijo' => 1600000],
                    ['nombre' => 'Investigador asociado', 'unidades_asmenut' => 300, 'monto_fijo' => 1500000],
                    ['nombre' => 'Investigador colaborador', 'unidades_asmenut' => 260, 'monto_fijo' => 1300000],
                    ['nombre' => 'Investigador junior', 'unidades_asmenut' => 230, 'monto_fijo' => 1150000],
                    ['nombre' => 'Colaborador en proyectos', 'unidades_asmenut' => 200, 'monto_fijo' => 1000000]
                ]
            ],
            [
                'nombre' => 'Dirección Técnica de Alimentos',
                'icono' => 'file-text',
                'descripcion' => 'Servicios de dirección técnica',
                'orden' => 8,
                'servicios' => [
                    ['nombre' => 'Dirección técnica 20 hs semanales', 'unidades_asmenut' => 300, 'monto_fijo' => 1500000],
                    ['nombre' => 'Dirección técnica 30 hs semanales', 'unidades_asmenut' => 400, 'monto_fijo' => 2000000],
                    ['nombre' => 'Dirección técnica 40 hs semanales', 'unidades_asmenut' => 500, 'monto_fijo' => 2500000],
                    ['nombre' => 'Asesorías', 'unidades_asmenut' => 250, 'monto_fijo' => 1250000],
                    ['nombre' => 'Capacitador (carnet manipulación)', 'unidades_asmenut' => 6, 'monto_fijo' => 30000],
                    ['nombre' => 'Inscripción RNE - RNPA', 'unidades_asmenut' => 300, 'monto_fijo' => 1500000],
                    ['nombre' => 'Reinscripción RNE/RNPA', 'unidades_asmenut' => 200, 'monto_fijo' => 1000000],
                    ['nombre' => 'Rotulado nutricional básico', 'unidades_asmenut' => 250, 'monto_fijo' => 1250000],
                    ['nombre' => 'Desarrollo de producto alimenticio', 'unidades_asmenut' => 500, 'monto_fijo' => 2500000]
                ]
            ]
        ];

        foreach ($categorias as $categoriaData) {
            $servicios = $categoriaData['servicios'];
            unset($categoriaData['servicios']);

            $categoriaId = $categoriaModel->insert($categoriaData);

            foreach ($servicios as $servicio) {
                $servicio['categoria_id'] = $categoriaId;
                $servicioModel->insert($servicio);
            }
        }

        echo "Seeder de honorarios ejecutado exitosamente.\n";
    }
}
