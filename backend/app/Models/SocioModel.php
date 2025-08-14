<?php

namespace App\Models;

use CodeIgniter\Model;

class SocioModel extends Model
{
    protected $table = 'socios';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
    protected $protectFields = true;
    
    protected $allowedFields = [
        'numero_socio',
        'dni',
        'nombre',
        'apellido',
        'email',
        'telefono',
        'domicilio',
        'fecha_nacimiento',
        'fecha_ingreso',
        'estado',
        'tipo_socio',
        'universidad',
        'matricula_profesional',
        'fecha_graduacion',
        'observaciones',
        'user_id'
    ];

    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';

    protected $validationRules = [
        'numero_socio' => 'required|is_unique[socios.numero_socio,id,{id}]|max_length[20]',
        'dni' => 'required|is_unique[socios.dni,id,{id}]|max_length[20]',
        'nombre' => 'required|max_length[100]',
        'apellido' => 'required|max_length[100]',
        'email' => 'required|valid_email|is_unique[socios.email,id,{id}]|max_length[255]',
        'telefono' => 'permit_empty|max_length[20]',
        'fecha_nacimiento' => 'permit_empty|valid_date',
        'fecha_ingreso' => 'permit_empty|valid_date',
        'estado' => 'required|in_list[activo,inactivo,suspendido]',
        'tipo_socio' => 'required|in_list[titular,adherente,estudiante]',
        'universidad' => 'permit_empty|max_length[255]',
        'matricula_profesional' => 'permit_empty|max_length[50]',
        'fecha_graduacion' => 'permit_empty|valid_date',
        'user_id' => 'permit_empty|is_natural'
    ];

    protected $validationMessages = [
        'numero_socio' => [
            'required' => 'El número de socio es requerido',
            'is_unique' => 'Este número de socio ya existe',
            'max_length' => 'El número de socio no puede exceder 20 caracteres'
        ],
        'dni' => [
            'required' => 'El DNI es requerido',
            'is_unique' => 'Este DNI ya está registrado',
            'max_length' => 'El DNI no puede exceder 20 caracteres'
        ],
        'nombre' => [
            'required' => 'El nombre es requerido',
            'max_length' => 'El nombre no puede exceder 100 caracteres'
        ],
        'apellido' => [
            'required' => 'El apellido es requerido',
            'max_length' => 'El apellido no puede exceder 100 caracteres'
        ],
        'email' => [
            'required' => 'El email es requerido',
            'valid_email' => 'Debe proporcionar un email válido',
            'is_unique' => 'Este email ya está registrado'
        ],
        'estado' => [
            'required' => 'El estado es requerido',
            'in_list' => 'El estado debe ser: activo, inactivo o suspendido'
        ],
        'tipo_socio' => [
            'required' => 'El tipo de socio es requerido',
            'in_list' => 'El tipo de socio debe ser: titular, adherente o estudiante'
        ]
    ];

    protected $skipValidation = false;
    protected $cleanValidationRules = true;

    protected $allowCallbacks = true;
    protected $beforeInsert = ['generateNumeroSocio'];
    protected $beforeUpdate = [];
    protected $afterInsert = [];
    protected $afterUpdate = [];
    protected $beforeFind = [];
    protected $afterFind = [];
    protected $beforeDelete = [];
    protected $afterDelete = [];

    /**
     * Genera automáticamente el número de socio si no se proporciona
     */
    protected function generateNumeroSocio(array $data)
    {
        if (!isset($data['data']['numero_socio']) || empty($data['data']['numero_socio'])) {
            $lastSocio = $this->orderBy('id', 'DESC')->first();
            $nextNumber = $lastSocio ? (int)substr($lastSocio['numero_socio'], 3) + 1 : 1;
            $data['data']['numero_socio'] = 'ASN' . str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
        }
        return $data;
    }

    /**
     * Obtiene socios con información del usuario asociado
     */
    public function getSociosWithUser($limit = null, $offset = 0, $search = null)
    {
        $builder = $this->db->table($this->table);
        $builder->select('socios.*, users.username, users.active as user_active');
        $builder->join('users', 'users.id = socios.user_id', 'left');
        
        if ($search) {
            $builder->groupStart()
                ->like('socios.nombre', $search)
                ->orLike('socios.apellido', $search)
                ->orLike('socios.dni', $search)
                ->orLike('socios.numero_socio', $search)
                ->orLike('socios.email', $search)
                ->groupEnd();
        }
        
        $builder->orderBy('socios.created_at', 'DESC');
        
        if ($limit) {
            $builder->limit($limit, $offset);
        }
        
        return $builder->get()->getResultArray();
    }

    /**
     * Cuenta el total de socios con filtro de búsqueda
     */
    public function countSocios($search = null)
    {
        $builder = $this->db->table($this->table);
        
        if ($search) {
            $builder->groupStart()
                ->like('nombre', $search)
                ->orLike('apellido', $search)
                ->orLike('dni', $search)
                ->orLike('numero_socio', $search)
                ->orLike('email', $search)
                ->groupEnd();
        }
        
        return $builder->countAllResults();
    }

    /**
     * Obtiene estadísticas de socios
     */
    public function getStats()
    {
        $total = $this->countAll();
        $activos = $this->where('estado', 'activo')->countAllResults(false);
        $inactivos = $this->where('estado', 'inactivo')->countAllResults(false);
        $suspendidos = $this->where('estado', 'suspendido')->countAllResults(false);
        
        $titulares = $this->where('tipo_socio', 'titular')->countAllResults(false);
        $adherentes = $this->where('tipo_socio', 'adherente')->countAllResults(false);
        $estudiantes = $this->where('tipo_socio', 'estudiante')->countAllResults(false);
        
        return [
            'total' => $total,
            'por_estado' => [
                'activos' => $activos,
                'inactivos' => $inactivos,
                'suspendidos' => $suspendidos
            ],
            'por_tipo' => [
                'titulares' => $titulares,
                'adherentes' => $adherentes,
                'estudiantes' => $estudiantes
            ]
        ];
    }

    /**
     * Busca socio por DNI
     */
    public function findByDni($dni)
    {
        return $this->where('dni', $dni)->first();
    }

    /**
     * Busca socio por número de socio
     */
    public function findByNumeroSocio($numeroSocio)
    {
        return $this->where('numero_socio', $numeroSocio)->first();
    }

    /**
     * Obtiene socios por estado
     */
    public function getSociosByEstado($estado)
    {
        return $this->where('estado', $estado)->findAll();
    }

    /**
     * Obtiene socios por tipo
     */
    public function getSociosByTipo($tipo)
    {
        return $this->where('tipo_socio', $tipo)->findAll();
    }
}