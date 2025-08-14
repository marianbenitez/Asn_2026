<?php

namespace App\Models;

use CodeIgniter\Model;

class HonorariosServicioModel extends Model
{
    protected $table            = 'honorarios_servicios';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;

    protected $allowedFields = [
        'categoria_id',
        'nombre',
        'unidades_asmenut',
        'monto_fijo',
        'monto_por_hora',
        'monto_mensual',
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
        'categoria_id'      => 'required|integer',
        'nombre'            => 'required|max_length[255]',
        'unidades_asmenut'  => 'required|integer',
        'monto_fijo'        => 'decimal[15,2]',
        'monto_por_hora'    => 'decimal[15,2]',
        'monto_mensual'     => 'decimal[15,2]',
        'activo'            => 'in_list[0,1]',
        'orden'             => 'integer'
    ];

    protected $validationMessages = [
        'categoria_id' => [
            'required' => 'La categoría es obligatoria',
            'integer'  => 'La categoría debe ser un número entero'
        ],
        'nombre' => [
            'required'   => 'El nombre del servicio es obligatorio',
            'max_length' => 'El nombre no puede exceder 255 caracteres'
        ],
        'unidades_asmenut' => [
            'required' => 'Las unidades ASMENUT son obligatorias',
            'integer'  => 'Las unidades deben ser un número entero'
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
     * Obtener servicios por categoría
     */
    public function getServiciosPorCategoria($categoriaId)
    {
        return $this->where('categoria_id', $categoriaId)
            ->where('activo', 1)
            ->orderBy('orden', 'ASC')
            ->orderBy('nombre', 'ASC')
            ->findAll();
    }

    /**
     * Obtener servicios activos
     */
    public function getServiciosActivos()
    {
        return $this->where('activo', 1)
            ->orderBy('categoria_id', 'ASC')
            ->orderBy('orden', 'ASC')
            ->findAll();
    }

    /**
     * Calcular monto total de un servicio
     */
    public function calcularMonto($servicio, $valorAsmenut)
    {
        $monto = 0;

        if ($servicio['monto_fijo']) {
            $monto = $servicio['monto_fijo'];
        } elseif ($servicio['monto_por_hora']) {
            $monto = $servicio['monto_por_hora'];
        } elseif ($servicio['monto_mensual']) {
            $monto = $servicio['monto_mensual'];
        } else {
            // Calcular basado en unidades ASMENUT
            $monto = $servicio['unidades_asmenut'] * $valorAsmenut;
        }

        return $monto;
    }

    /**
     * Obtener servicios con montos calculados
     */
    public function getServiciosConMontos($valorAsmenut)
    {
        $servicios = $this->getServiciosActivos();

        foreach ($servicios as &$servicio) {
            $servicio['monto_calculado'] = $this->calcularMonto($servicio, $valorAsmenut);
        }

        return $servicios;
    }
}
