<?php

namespace App\Controllers\Api;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use App\Models\NewsModel;

class NewsController extends ResourceController
{
    use ResponseTrait;

    protected $newsModel;

    public function __construct()
    {
        $this->newsModel = new NewsModel();
    }

    /**
     * Obtener todas las noticias publicadas
     */
    public function index()
    {
        try {
            $page = $this->request->getVar('page') ?? 1;
            $limit = $this->request->getVar('limit') ?? 10;
            $search = $this->request->getVar('search');
            
            $offset = ($page - 1) * $limit;
            
            $noticias = $this->newsModel->getNewsWithPagination($limit, $offset, $search);
            $total = $this->newsModel->countNews($search);
            
            return $this->respond([
                'success' => true,
                'data' => $noticias,
                'pagination' => [
                    'total' => $total,
                    'page' => (int)$page,
                    'limit' => (int)$limit,
                    'pages' => ceil($total / $limit)
                ]
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::index - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener las noticias: ' . $e->getMessage());
        }
    }

    /**
     * Obtener noticias destacadas
     */
    public function featured()
    {
        try {
            $limit = $this->request->getVar('limit') ?? 3;
            $noticias = $this->newsModel->getFeaturedNews($limit);
            
            return $this->respond([
                'success' => true,
                'data' => $noticias
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::featured - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener las noticias destacadas: ' . $e->getMessage());
        }
    }

    /**
     * Obtener noticias recientes
     */
    public function recent()
    {
        try {
            $limit = $this->request->getVar('limit') ?? 5;
            $noticias = $this->newsModel->getRecentNews($limit);
            
            return $this->respond([
                'success' => true,
                'data' => $noticias
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::recent - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener las noticias recientes: ' . $e->getMessage());
        }
    }

    /**
     * Mostrar noticia por slug
     */
    public function show($slug = null)
    {
        if (!$slug) {
            return $this->failValidationErrors(['slug' => 'Slug de noticia requerido']);
        }

        try {
            $noticia = $this->newsModel->findBySlug($slug);
            
            if (!$noticia) {
                return $this->failNotFound('Noticia no encontrada');
            }
            
            return $this->respond([
                'success' => true,
                'data' => $noticia
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::show - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener la noticia: ' . $e->getMessage());
        }
    }

    /**
     * Crear nueva noticia (requiere autenticación)
     */
    public function create()
    {
        $rules = [
            'titulo' => 'required|max_length[255]',
            'descripcion_corta' => 'required|max_length[500]',
            'contenido' => 'required',
            'fecha_publicacion' => 'required|valid_date',
            'imagen' => 'uploaded[imagen]|is_image[imagen]|max_size[imagen,2048]|ext_in[imagen,jpg,jpeg,png,gif,webp]'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $imagen = $this->request->getFile('imagen');
            $imagenPath = null;

            if ($imagen && $imagen->isValid() && !$imagen->hasMoved()) {
                $newName = $imagen->getRandomName();
                $imagen->move(ROOTPATH . 'public/uploads/news/', $newName);
                $imagenPath = 'uploads/news/' . $newName;
            }

            $data = [
                'titulo' => $this->request->getVar('titulo'),
                'descripcion_corta' => $this->request->getVar('descripcion_corta'),
                'contenido' => $this->request->getVar('contenido'),
                'imagen' => $imagenPath,
                'fecha_publicacion' => $this->request->getVar('fecha_publicacion'),
                'activo' => $this->request->getVar('activo') ?? 1,
                'destacado' => $this->request->getVar('destacado') ?? 0
            ];

            $id = $this->newsModel->insert($data);

            if (!$id) {
                return $this->failServerError('Error al crear la noticia');
            }

            $noticia = $this->newsModel->find($id);

            return $this->respondCreated([
                'success' => true,
                'message' => 'Noticia creada exitosamente',
                'data' => $noticia
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::create - Error: ' . $e->getMessage());
            return $this->failServerError('Error al crear la noticia: ' . $e->getMessage());
        }
    }

    /**
     * Actualizar noticia (requiere autenticación)
     */
    public function update($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de noticia requerido']);
        }

        $noticia = $this->newsModel->find($id);
        if (!$noticia) {
            return $this->failNotFound('Noticia no encontrada');
        }

        $rules = [
            'titulo' => 'required|max_length[255]',
            'descripcion_corta' => 'required|max_length[500]',
            'contenido' => 'required',
            'fecha_publicacion' => 'required|valid_date'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'titulo' => $this->request->getVar('titulo'),
                'descripcion_corta' => $this->request->getVar('descripcion_corta'),
                'contenido' => $this->request->getVar('contenido'),
                'fecha_publicacion' => $this->request->getVar('fecha_publicacion'),
                'activo' => $this->request->getVar('activo') ?? $noticia['activo'],
                'destacado' => $this->request->getVar('destacado') ?? $noticia['destacado']
            ];

            // Manejar actualización de imagen
            $imagen = $this->request->getFile('imagen');
            if ($imagen && $imagen->isValid() && !$imagen->hasMoved()) {
                // Eliminar imagen anterior si existe
                if ($noticia['imagen'] && file_exists(ROOTPATH . 'public/' . $noticia['imagen'])) {
                    unlink(ROOTPATH . 'public/' . $noticia['imagen']);
                }

                $newName = $imagen->getRandomName();
                $imagen->move(ROOTPATH . 'public/uploads/news/', $newName);
                $data['imagen'] = 'uploads/news/' . $newName;
            }

            $this->newsModel->update($id, $data);
            $noticiaActualizada = $this->newsModel->find($id);

            return $this->respond([
                'success' => true,
                'message' => 'Noticia actualizada exitosamente',
                'data' => $noticiaActualizada
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::update - Error: ' . $e->getMessage());
            return $this->failServerError('Error al actualizar la noticia: ' . $e->getMessage());
        }
    }

    /**
     * Eliminar noticia (requiere autenticación)
     */
    public function delete($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de noticia requerido']);
        }

        try {
            $noticia = $this->newsModel->find($id);
            if (!$noticia) {
                return $this->failNotFound('Noticia no encontrada');
            }

            // Eliminar imagen si existe
            if ($noticia['imagen'] && file_exists(ROOTPATH . 'public/' . $noticia['imagen'])) {
                unlink(ROOTPATH . 'public/' . $noticia['imagen']);
            }

            $this->newsModel->delete($id);

            return $this->respondDeleted([
                'success' => true,
                'message' => 'Noticia eliminada exitosamente'
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::delete - Error: ' . $e->getMessage());
            return $this->failServerError('Error al eliminar la noticia: ' . $e->getMessage());
        }
    }

    /**
     * Obtener todas las noticias para administración (incluye inactivas)
     */
    public function admin()
    {
        try {
            $page = $this->request->getVar('page') ?? 1;
            $limit = $this->request->getVar('limit') ?? 10;
            $search = $this->request->getVar('search');
            
            $offset = ($page - 1) * $limit;
            
            $noticias = $this->newsModel->getNewsWithPagination($limit, $offset, $search, true);
            $total = $this->newsModel->countNews($search, true);
            
            return $this->respond([
                'success' => true,
                'data' => $noticias,
                'pagination' => [
                    'total' => $total,
                    'page' => (int)$page,
                    'limit' => (int)$limit,
                    'pages' => ceil($total / $limit)
                ]
            ]);
        } catch (\Exception $e) {
            log_message('error', 'NewsController::admin - Error: ' . $e->getMessage());
            return $this->failServerError('Error al obtener las noticias: ' . $e->getMessage());
        }
    }
}