<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateSocios extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'numero_socio' => [
                'type'       => 'VARCHAR',
                'constraint' => 20,
                'unique'     => true,
            ],
            'dni' => [
                'type'       => 'VARCHAR',
                'constraint' => 20,
                'unique'     => true,
            ],
            'nombre' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
            'apellido' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
            'email' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'unique'     => true,
            ],
            'telefono' => [
                'type'       => 'VARCHAR',
                'constraint' => 20,
                'null'       => true,
            ],
            'domicilio' => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'fecha_nacimiento' => [
                'type' => 'DATE',
                'null' => true,
            ],
            'fecha_ingreso' => [
                'type'    => 'DATE',
                'default' => 'CURRENT_DATE',
            ],
            'estado' => [
                'type'       => 'ENUM',
                'constraint' => ['activo', 'inactivo', 'suspendido'],
                'default'    => 'activo',
            ],
            'tipo_socio' => [
                'type'       => 'ENUM',
                'constraint' => ['titular', 'adherente', 'estudiante'],
                'default'    => 'titular',
            ],
            'universidad' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
            ],
            'matricula_profesional' => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
                'null'       => true,
            ],
            'fecha_graduacion' => [
                'type' => 'DATE',
                'null' => true,
            ],
            'observaciones' => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'user_id' => [
                'type'     => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'null'     => true,
            ],
            'created_at' => [
                'type'    => 'DATETIME',
                'default' => 'CURRENT_TIMESTAMP',
            ],
            'updated_at' => [
                'type'    => 'DATETIME',
                'default' => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
            ],
        ]);

        $this->forge->addKey('id', true);
        $this->forge->addKey('numero_socio');
        $this->forge->addKey('dni');
        $this->forge->addKey('email');
        $this->forge->addKey('estado');
        $this->forge->addKey('tipo_socio');
        $this->forge->addForeignKey('user_id', 'users', 'id', 'SET NULL', 'SET NULL');
        
        $this->forge->createTable('socios');
    }

    public function down()
    {
        $this->forge->dropTable('socios');
    }
}