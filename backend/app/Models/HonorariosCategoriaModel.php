<?php

namespace App\Models;

use CodeIgniter\Model;

class HonorariosCategoriaModel extends Model
{
    protected $table            = 'honorarios_categorias';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;

    protected $allowedFields = [
        'nombre',
        'icono',
        'descripcion',
        'activo',
        'orden'
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';

    // Validation
    protected $validationRules = [
        'nombre' => 'required|max_length[255]',
        'icono'  => 'max_length[100]',
        'activo' => 'in_list[0,1]',
        'orden'  => 'integer'
    ];

    protected $validationMessages = [
        'nombre' => [
            'required'   => 'El nombre de la categoría es obligatorio',
            'max_length' => 'El nombre no puede exceder 255 caracteres'
        ],
        'activo' => [
            'in_list' => 'El campo activo debe ser 0 o 1'
        ],
        'orden' => [
            'integer' => 'El orden debe ser un número entero'
        ]
    ];

    protected $skipValidation = false;

    /**
     * Obtener categorías activas ordenadas
     */
    public function getCategoriasActivas()
    {
        return $this->where('activo', 1)
            ->orderBy('orden', 'ASC')
            ->orderBy('nombre', 'ASC')
            ->findAll();
    }

    /**
     * Obtener categoría con sus servicios
     */
    public function getCategoriaConServicios($id)
    {
        $categoria = $this->find($id);
        if (!$categoria) {
            return null;
        }

        $serviciosModel = new HonorariosServicioModel();
        $categoria['servicios'] = $serviciosModel->getServiciosPorCategoria($id);

        return $categoria;
    }

    /**
     * Obtener todas las categorías con sus servicios
     */
    public function getCategoriasConServicios()
    {
        $categorias = $this->getCategoriasActivas();
        $serviciosModel = new HonorariosServicioModel();

        foreach ($categorias as &$categoria) {
            $categoria['servicios'] = $serviciosModel->getServiciosPorCategoria($categoria['id']);
        }

        return $categorias;
    }
}
