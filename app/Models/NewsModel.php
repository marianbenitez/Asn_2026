<?php

namespace App\Models;

use CodeIgniter\Model;

class NewsModel extends Model
{
    protected $table = 'news';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
    protected $protectFields = true;
    
    protected $allowedFields = [
        'titulo',
        'descripcion_corta',
        'contenido',
        'imagen',
        'slug',
        'activo',
        'destacado',
        'fecha_publicacion'
    ];

    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';

    protected $validationRules = [
        'titulo' => 'required|max_length[255]',
        'descripcion_corta' => 'required|max_length[500]',
        'contenido' => 'required',
        'slug' => 'required|is_unique[news.slug,id,{id}]|max_length[255]',
        'fecha_publicacion' => 'required|valid_date'
    ];

    protected $validationMessages = [
        'titulo' => [
            'required' => 'El título es requerido',
            'max_length' => 'El título no puede exceder 255 caracteres'
        ],
        'descripcion_corta' => [
            'required' => 'La descripción corta es requerida',
            'max_length' => 'La descripción corta no puede exceder 500 caracteres'
        ],
        'contenido' => [
            'required' => 'El contenido es requerido'
        ],
        'slug' => [
            'required' => 'El slug es requerido',
            'is_unique' => 'Este slug ya existe',
            'max_length' => 'El slug no puede exceder 255 caracteres'
        ],
        'fecha_publicacion' => [
            'required' => 'La fecha de publicación es requerida',
            'valid_date' => 'Debe proporcionar una fecha válida'
        ]
    ];

    protected $skipValidation = false;
    protected $cleanValidationRules = true;

    protected $allowCallbacks = true;
    protected $beforeInsert = ['generateSlug'];
    protected $beforeUpdate = ['generateSlug'];

    /**
     * Genera slug automáticamente si no se proporciona
     */
    protected function generateSlug(array $data)
    {
        if (!isset($data['data']['slug']) || empty($data['data']['slug'])) {
            if (isset($data['data']['titulo'])) {
                $data['data']['slug'] = $this->createSlug($data['data']['titulo']);
            }
        }
        return $data;
    }

    /**
     * Crea un slug a partir del título
     */
    private function createSlug($titulo)
    {
        $slug = strtolower(trim($titulo));
        $slug = preg_replace('/[^a-z0-9-]/', '-', $slug);
        $slug = preg_replace('/-+/', '-', $slug);
        $slug = trim($slug, '-');
        
        // Verificar si el slug ya existe y agregar número si es necesario
        $originalSlug = $slug;
        $counter = 1;
        while ($this->where('slug', $slug)->first()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }
        
        return $slug;
    }

    /**
     * Obtiene noticias publicadas y activas
     */
    public function getPublishedNews($limit = null, $offset = 0)
    {
        $builder = $this->where('activo', 1)
                        ->where('fecha_publicacion <=', date('Y-m-d H:i:s'))
                        ->orderBy('fecha_publicacion', 'DESC');
        
        if ($limit) {
            $builder->limit($limit, $offset);
        }
        
        return $builder->findAll();
    }

    /**
     * Obtiene noticias destacadas
     */
    public function getFeaturedNews($limit = 3)
    {
        return $this->where('activo', 1)
                    ->where('destacado', 1)
                    ->where('fecha_publicacion <=', date('Y-m-d H:i:s'))
                    ->orderBy('fecha_publicacion', 'DESC')
                    ->limit($limit)
                    ->findAll();
    }

    /**
     * Busca noticia por slug
     */
    public function findBySlug($slug)
    {
        return $this->where('slug', $slug)
                    ->where('activo', 1)
                    ->where('fecha_publicacion <=', date('Y-m-d H:i:s'))
                    ->first();
    }

    /**
     * Obtiene noticias con paginación y búsqueda
     */
    public function getNewsWithPagination($limit = 10, $offset = 0, $search = null, $includeInactive = false)
    {
        $builder = $this->select();
        
        if (!$includeInactive) {
            $builder->where('activo', 1)
                   ->where('fecha_publicacion <=', date('Y-m-d H:i:s'));
        }
        
        if ($search) {
            $builder->groupStart()
                   ->like('titulo', $search)
                   ->orLike('descripcion_corta', $search)
                   ->orLike('contenido', $search)
                   ->groupEnd();
        }
        
        return $builder->orderBy('fecha_publicacion', 'DESC')
                      ->limit($limit, $offset)
                      ->findAll();
    }

    /**
     * Cuenta noticias con filtros
     */
    public function countNews($search = null, $includeInactive = false)
    {
        $builder = $this->select('id');
        
        if (!$includeInactive) {
            $builder->where('activo', 1)
                   ->where('fecha_publicacion <=', date('Y-m-d H:i:s'));
        }
        
        if ($search) {
            $builder->groupStart()
                   ->like('titulo', $search)
                   ->orLike('descripcion_corta', $search)
                   ->orLike('contenido', $search)
                   ->groupEnd();
        }
        
        return $builder->countAllResults();
    }

    /**
     * Obtiene noticias recientes
     */
    public function getRecentNews($limit = 5)
    {
        return $this->where('activo', 1)
                    ->where('fecha_publicacion <=', date('Y-m-d H:i:s'))
                    ->orderBy('fecha_publicacion', 'DESC')
                    ->limit($limit)
                    ->findAll();
    }
}