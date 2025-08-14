<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddFieldsToUsers extends Migration
{
    public function up()
    {
        // Agregar campos a la tabla users si no existen
        $fields = [
            'email' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
                'after'      => 'id'
            ],
            'username' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
                'after'      => 'email'
            ],
            'first_name' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
                'after'      => 'username'
            ],
            'last_name' => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'null'       => true,
                'after'      => 'first_name'
            ],
            'active' => [
                'type'       => 'TINYINT',
                'constraint' => 1,
                'default'    => 1,
                'after'      => 'last_name'
            ]
        ];

        foreach ($fields as $fieldName => $fieldDef) {
            if (!$this->db->fieldExists($fieldName, 'users')) {
                $this->forge->addColumn('users', [$fieldName => $fieldDef]);
            }
        }
    }

    public function down()
    {
        // Remover campos agregados
        $fields = ['email', 'username', 'first_name', 'last_name', 'active'];

        foreach ($fields as $fieldName) {
            if ($this->db->fieldExists($fieldName, 'users')) {
                $this->forge->dropColumn('users', $fieldName);
            }
        }
    }
}
