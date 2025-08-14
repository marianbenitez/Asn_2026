<?php

namespace App\Models;

use CodeIgniter\Model;

class HonorariosConfiguracionModel extends Model
{
    protected $table            = 'honorarios_configuracion';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;

    protected $allowedFields = [
        'valor_asmenut',
        'fecha_vigencia',
        'descripcion',
        'activo'
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';

    // Validation
    protected $validationRules = [
        'valor_asmenut'  => 'required|decimal[15,2]',
        'fecha_vigencia' => 'required|valid_date',
        'activo'         => 'in_list[0,1]'
    ];

    protected $validationMessages = [
        'valor_asmenut' => [
            'required' => 'El valor ASMENUT es obligatorio',
            'decimal'  => 'El valor ASMENUT debe ser un número decimal'
        ],
        'fecha_vigencia' => [
            'required'   => 'La fecha de vigencia es obligatoria',
            'valid_date' => 'La fecha de vigencia debe ser una fecha válida'
        ],
        'activo' => [
            'in_list' => 'El campo activo debe ser 0 o 1'
        ]
    ];

    protected $skipValidation = false;

    /**
     * Obtener configuración activa
     */
    public function getConfiguracionActiva()
    {
        return $this->where('activo', 1)
            ->orderBy('fecha_vigencia', 'DESC')
            ->first();
    }

    /**
     * Obtener valor ASMENUT actual
     */
    public function getValorAsmenutActual()
    {
        $config = $this->getConfiguracionActiva();
        return $config ? $config['valor_asmenut'] : 5000; // Valor por defecto
    }

    /**
     * Obtener todas las configuraciones ordenadas por fecha
     */
    public function getConfiguraciones()
    {
        return $this->orderBy('fecha_vigencia', 'DESC')
            ->findAll();
    }

    /**
     * Activar una configuración y desactivar las demás
     */
    public function activarConfiguracion($id)
    {
        // Desactivar todas las configuraciones
        $this->set('activo', 0)->update();

        // Activar la configuración seleccionada
        return $this->update($id, ['activo' => 1]);
    }
}
