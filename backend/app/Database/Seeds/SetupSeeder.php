<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Shield\Models\UserModel;

class SetupSeeder extends Seeder
{
    public function run()
    {
        echo "Iniciando configuración del sistema...\n";

        // 1. Configurar Shield
        $this->setupShield();

        // 2. Crear usuario administrador
        $this->createAdminUser();

        echo "Configuración completada exitosamente.\n";
    }

    private function setupShield()
    {
        echo "Configurando Shield...\n";

        // Ejecutar comando de Shield si no está configurado
        try {
            $output = shell_exec('php spark shield:setup 2>&1');
            echo "Shield configurado: $output\n";
        } catch (\Exception $e) {
            echo "Error configurando Shield: " . $e->getMessage() . "\n";
        }
    }

    private function createAdminUser()
    {
        echo "Creando usuario administrador...\n";

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
                echo "✅ Usuario administrador creado exitosamente:\n";
                echo "   Email: admin@asn.com\n";
                echo "   Contraseña: Admin123!\n";
                echo "   ID: $userId\n";
                echo "   Rol: Administrador\n";
            } else {
                echo "❌ Error al crear el usuario administrador.\n";
                echo "   Errores: " . implode(', ', $userModel->errors()) . "\n";
            }
        } catch (\Exception $e) {
            echo "❌ Error al crear usuario administrador: " . $e->getMessage() . "\n";
        }
    }
}
