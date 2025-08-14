<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\SocioModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class SociosController extends ResourceController
{
    protected $modelName = 'App\Models\SocioModel';
    protected $format = 'json';

    public function __construct()
    {
        $this->model = new SocioModel();
    }

    /**
     * Obtiene la lista de socios con paginación y búsqueda
     */
    public function index()
    {
        try {
            $page = $this->request->getGet('page') ?? 1;
            $limit = $this->request->getGet('limit') ?? 10;
            $search = $this->request->getGet('search') ?? null;
            
            $offset = ($page - 1) * $limit;
            
            $socios = $this->model->getSociosWithUser($limit, $offset, $search);
            $total = $this->model->countSocios($search);
            
            return $this->respond([
                'status' => 'success',
                'data' => $socios,
                'pagination' => [
                    'page' => (int)$page,
                    'limit' => (int)$limit,
                    'total' => $total,
                    'pages' => ceil($total / $limit)
                ]
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al obtener socios: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtiene un socio específico por ID
     */
    public function show($id = null)
    {
        try {
            $socio = $this->model->find($id);
            
            if (!$socio) {
                return $this->failNotFound([
                    'status' => 'error',
                    'message' => 'Socio no encontrado'
                ]);
            }
            
            return $this->respond([
                'status' => 'success',
                'data' => $socio
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al obtener socio: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Crea un nuevo socio
     */
    public function create()
    {
        try {
            $data = $this->request->getJSON(true);
            
            if (!$data) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Datos inválidos'
                ]);
            }

            // Procesar fecha de nacimiento si viene como string
            if (isset($data['fecha_nacimiento']) && !empty($data['fecha_nacimiento'])) {
                $data['fecha_nacimiento'] = date('Y-m-d', strtotime($data['fecha_nacimiento']));
            }

            // Procesar fecha de graduación si viene como string
            if (isset($data['fecha_graduacion']) && !empty($data['fecha_graduacion'])) {
                $data['fecha_graduacion'] = date('Y-m-d', strtotime($data['fecha_graduacion']));
            }

            // Procesar fecha de ingreso si viene como string
            if (isset($data['fecha_ingreso']) && !empty($data['fecha_ingreso'])) {
                $data['fecha_ingreso'] = date('Y-m-d', strtotime($data['fecha_ingreso']));
            } else {
                $data['fecha_ingreso'] = date('Y-m-d');
            }
            
            $id = $this->model->insert($data);
            
            if (!$id) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Error de validación',
                    'errors' => $this->model->errors()
                ]);
            }
            
            $socio = $this->model->find($id);
            
            return $this->respondCreated([
                'status' => 'success',
                'message' => 'Socio creado exitosamente',
                'data' => $socio
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al crear socio: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Actualiza un socio existente
     */
    public function update($id = null)
    {
        try {
            $socio = $this->model->find($id);
            
            if (!$socio) {
                return $this->failNotFound([
                    'status' => 'error',
                    'message' => 'Socio no encontrado'
                ]);
            }
            
            $data = $this->request->getJSON(true);
            
            if (!$data) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Datos inválidos'
                ]);
            }

            // Procesar fechas si vienen como string
            if (isset($data['fecha_nacimiento']) && !empty($data['fecha_nacimiento'])) {
                $data['fecha_nacimiento'] = date('Y-m-d', strtotime($data['fecha_nacimiento']));
            }

            if (isset($data['fecha_graduacion']) && !empty($data['fecha_graduacion'])) {
                $data['fecha_graduacion'] = date('Y-m-d', strtotime($data['fecha_graduacion']));
            }

            if (isset($data['fecha_ingreso']) && !empty($data['fecha_ingreso'])) {
                $data['fecha_ingreso'] = date('Y-m-d', strtotime($data['fecha_ingreso']));
            }
            
            $success = $this->model->update($id, $data);
            
            if (!$success) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Error de validación',
                    'errors' => $this->model->errors()
                ]);
            }
            
            $socioActualizado = $this->model->find($id);
            
            return $this->respond([
                'status' => 'success',
                'message' => 'Socio actualizado exitosamente',
                'data' => $socioActualizado
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al actualizar socio: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Elimina un socio
     */
    public function delete($id = null)
    {
        try {
            $socio = $this->model->find($id);
            
            if (!$socio) {
                return $this->failNotFound([
                    'status' => 'error',
                    'message' => 'Socio no encontrado'
                ]);
            }
            
            $this->model->delete($id);
            
            return $this->respondDeleted([
                'status' => 'success',
                'message' => 'Socio eliminado exitosamente'
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al eliminar socio: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtiene estadísticas de socios
     */
    public function stats()
    {
        try {
            $stats = $this->model->getStats();
            
            return $this->respond([
                'status' => 'success',
                'data' => $stats
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al obtener estadísticas: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Busca socio por DNI
     */
    public function searchByDni()
    {
        try {
            $dni = $this->request->getGet('dni');
            
            if (!$dni) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'DNI es requerido'
                ]);
            }
            
            $socio = $this->model->findByDni($dni);
            
            if (!$socio) {
                return $this->respond([
                    'status' => 'success',
                    'data' => null,
                    'message' => 'Socio no encontrado'
                ]);
            }
            
            return $this->respond([
                'status' => 'success',
                'data' => $socio
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error en la búsqueda: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Busca socio por número de socio
     */
    public function searchByNumero()
    {
        try {
            $numero = $this->request->getGet('numero');
            
            if (!$numero) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Número de socio es requerido'
                ]);
            }
            
            $socio = $this->model->findByNumeroSocio($numero);
            
            if (!$socio) {
                return $this->respond([
                    'status' => 'success',
                    'data' => null,
                    'message' => 'Socio no encontrado'
                ]);
            }
            
            return $this->respond([
                'status' => 'success',
                'data' => $socio
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error en la búsqueda: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtiene socios por estado
     */
    public function getByEstado($estado)
    {
        try {
            $estadosValidos = ['activo', 'inactivo', 'suspendido'];
            
            if (!in_array($estado, $estadosValidos)) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Estado inválido. Debe ser: ' . implode(', ', $estadosValidos)
                ]);
            }
            
            $socios = $this->model->getSociosByEstado($estado);
            
            return $this->respond([
                'status' => 'success',
                'data' => $socios
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al obtener socios: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Obtiene socios por tipo
     */
    public function getByTipo($tipo)
    {
        try {
            $tiposValidos = ['titular', 'adherente', 'estudiante'];
            
            if (!in_array($tipo, $tiposValidos)) {
                return $this->failValidationError([
                    'status' => 'error',
                    'message' => 'Tipo inválido. Debe ser: ' . implode(', ', $tiposValidos)
                ]);
            }
            
            $socios = $this->model->getSociosByTipo($tipo);
            
            return $this->respond([
                'status' => 'success',
                'data' => $socios
            ]);
        } catch (\Exception $e) {
            return $this->fail([
                'status' => 'error',
                'message' => 'Error al obtener socios: ' . $e->getMessage()
            ], ResponseInterface::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}