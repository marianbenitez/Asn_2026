<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Shield\Models\UserModel;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        $userModel = new UserModel();

        // Verificar si ya existe el usuario admin
        $existingAdmin = $userModel->where('email', 'admin@asn.com')->first();

        if ($existingAdmin) {
            echo "El usuario administrador ya existe.\n";
            return;
        }

        // Crear usuario administrador
        $adminData = [
            'email' => 'admin@asn.com',
            'username' => 'admin',
            'password' => 'Admin123!',
            'first_name' => 'Administrador',
            'last_name' => 'ASN',
            'active' => 1,
        ];

        try {
            $userId = $userModel->insert($adminData);

            if ($userId) {
                // Asignar rol de administrador (si tienes sistema de roles)
                // $userModel->addToGroup($userId, 'admin');

                echo "Usuario administrador creado exitosamente:\n";
                echo "Email: admin@asn.com\n";
                echo "Contraseña: Admin123!\n";
                echo "ID: $userId\n";
            } else {
                echo "Error al crear el usuario administrador.\n";
                echo "Errores: " . implode(', ', $userModel->errors()) . "\n";
            }
        } catch (\Exception $e) {
            echo "Error al crear usuario administrador: " . $e->getMessage() . "\n";
        }
    }
}
