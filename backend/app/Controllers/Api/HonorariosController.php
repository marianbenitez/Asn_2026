<?php

namespace App\Controllers\Api;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use App\Models\HonorariosCategoriaModel;
use App\Models\HonorariosServicioModel;
use App\Models\HonorariosConfiguracionModel;

class HonorariosController extends ResourceController
{
    use ResponseTrait;

    protected $categoriaModel;
    protected $servicioModel;
    protected $configuracionModel;

    public function __construct()
    {
        $this->categoriaModel = new HonorariosCategoriaModel();
        $this->servicioModel = new HonorariosServicioModel();
        $this->configuracionModel = new HonorariosConfiguracionModel();
    }

    /**
     * Obtener todos los honorarios con configuración actual
     */
    public function index()
    {
        try {
            log_message('info', 'HonorariosController::index - Iniciando');

            $valorAsmenut = $this->configuracionModel->getValorAsmenutActual();
            log_message('info', 'HonorariosController::index - Valor ASMENUT: ' . $valorAsmenut);

            $categorias = $this->categoriaModel->getCategoriasConServicios();
            log_message('info', 'HonorariosController::index - Categorías encontradas: ' . count($categorias));

            // Debug: mostrar categorías
            foreach ($categorias as $cat) {
                log_message('info', 'HonorariosController::index - Categoría: ' . $cat['nombre'] . ' (ID: ' . $cat['id'] . ')');
            }

            // Calcular montos para cada servicio
            foreach ($categorias as &$categoria) {
                foreach ($categoria['servicios'] as &$servicio) {
                    $servicio['monto_calculado'] = $this->servicioModel->calcularMonto($servicio, $valorAsmenut);
                }
            }

            $response = [
                'success' => true,
                'valor_asmenut' => $valorAsmenut,
                'categorias' => $categorias
            ];

            log_message('info', 'HonorariosController::index - Respuesta: ' . json_encode($response));

            return $this->respond($response);
        } catch (\Exception $e) {
            log_message('error', 'HonorariosController::index - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener los honorarios: ' . $e->getMessage());
        }
    }

    /**
     * Obtener configuración actual
     */
    public function getConfiguracion()
    {
        try {
            $configuracion = $this->configuracionModel->getConfiguracionActiva();

            return $this->respond([
                'success' => true,
                'configuracion' => $configuracion
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener la configuración: ' . $e->getMessage());
        }
    }

    /**
     * Crear nueva configuración
     */
    public function createConfiguracion()
    {
        $rules = [
            'valor_asmenut'  => 'required|decimal[15,2]',
            'fecha_vigencia' => 'required|valid_date',
            'descripcion'    => 'permit_empty|string'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'valor_asmenut' => $this->request->getVar('valor_asmenut'),
                'fecha_vigencia' => $this->request->getVar('fecha_vigencia'),
                'descripcion' => $this->request->getVar('descripcion'),
                'activo' => 0 // Por defecto inactivo
            ];

            $id = $this->configuracionModel->insert($data);

            return $this->respondCreated([
                'success' => true,
                'message' => 'Configuración creada exitosamente',
                'id' => $id
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al crear la configuración: ' . $e->getMessage());
        }
    }

    /**
     * Activar configuración
     */
    public function activarConfiguracion($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de configuración requerido']);
        }

        try {
            $this->configuracionModel->activarConfiguracion($id);

            return $this->respond([
                'success' => true,
                'message' => 'Configuración activada exitosamente'
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al activar la configuración: ' . $e->getMessage());
        }
    }

    /**
     * Obtener categorías
     */
    public function getCategorias()
    {
        try {
            $categorias = $this->categoriaModel->getCategoriasActivas();

            return $this->respond([
                'success' => true,
                'categorias' => $categorias
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener las categorías: ' . $e->getMessage());
        }
    }

    /**
     * Crear categoría
     */
    public function createCategoria()
    {
        $rules = [
            'nombre' => 'required|max_length[255]',
            'icono' => 'permit_empty|max_length[100]',
            'descripcion' => 'permit_empty|string',
            'orden' => 'permit_empty|integer'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'nombre' => $this->request->getVar('nombre'),
                'icono' => $this->request->getVar('icono'),
                'descripcion' => $this->request->getVar('descripcion'),
                'orden' => $this->request->getVar('orden') ?? 0,
                'activo' => 1
            ];

            $id = $this->categoriaModel->insert($data);

            return $this->respondCreated([
                'success' => true,
                'message' => 'Categoría creada exitosamente',
                'id' => $id
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al crear la categoría: ' . $e->getMessage());
        }
    }

    /**
     * Obtener servicios por categoría
     */
    public function getServicios($categoriaId = null)
    {
        if (!$categoriaId) {
            return $this->failValidationErrors(['categoria_id' => 'ID de categoría requerido']);
        }

        try {
            $servicios = $this->servicioModel->getServiciosPorCategoria($categoriaId);
            $valorAsmenut = $this->configuracionModel->getValorAsmenutActual();

            // Calcular montos
            foreach ($servicios as &$servicio) {
                $servicio['monto_calculado'] = $this->servicioModel->calcularMonto($servicio, $valorAsmenut);
            }

            return $this->respond([
                'success' => true,
                'servicios' => $servicios,
                'valor_asmenut' => $valorAsmenut
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener los servicios: ' . $e->getMessage());
        }
    }

    /**
     * Crear servicio
     */
    public function createServicio()
    {
        $rules = [
            'categoria_id' => 'required|integer',
            'nombre' => 'required|max_length[255]',
            'unidades_asmenut' => 'required|integer',
            'monto_fijo' => 'permit_empty|decimal[15,2]',
            'monto_por_hora' => 'permit_empty|decimal[15,2]',
            'monto_mensual' => 'permit_empty|decimal[15,2]',
            'orden' => 'permit_empty|integer'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'categoria_id' => $this->request->getVar('categoria_id'),
                'nombre' => $this->request->getVar('nombre'),
                'unidades_asmenut' => $this->request->getVar('unidades_asmenut'),
                'monto_fijo' => $this->request->getVar('monto_fijo'),
                'monto_por_hora' => $this->request->getVar('monto_por_hora'),
                'monto_mensual' => $this->request->getVar('monto_mensual'),
                'orden' => $this->request->getVar('orden') ?? 0,
                'activo' => 1
            ];

            $id = $this->servicioModel->insert($data);

            return $this->respondCreated([
                'success' => true,
                'message' => 'Servicio creado exitosamente',
                'id' => $id
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al crear el servicio: ' . $e->getMessage());
        }
    }
}
