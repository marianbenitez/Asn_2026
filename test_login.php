<?php

/**
 * Script para probar el login con diferentes credenciales
 */

echo "🔐 Probando login...\n\n";

// Credenciales a probar
$testCredentials = [
    ['email' => 'admin@asn.com', 'password' => 'Admin123!'],
    ['email' => 'benitezmariano5@gmail.com', 'password' => 'Admin123!'],
    ['email' => 'admin@asn.com', 'password' => 'wrongpassword'],
];

foreach ($testCredentials as $index => $credentials) {
    echo "Prueba " . ($index + 1) . ": " . $credentials['email'] . "\n";

    $data = json_encode($credentials);

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/json',
            'content' => $data
        ]
    ]);

    $response = file_get_contents('http://localhost:8080/api/login', false, $context);

    if ($response === false) {
        echo "  ❌ Error de conexión\n";
    } else {
        $responseData = json_decode($response, true);
        if (isset($responseData['success']) && $responseData['success']) {
            echo "  ✅ Login exitoso\n";
            echo "  Token: " . substr($responseData['token'], 0, 20) . "...\n";
            echo "  User ID: " . $responseData['user']['id'] . "\n";
        } else {
            echo "  ❌ Login fallido: " . ($responseData['message'] ?? 'Error desconocido') . "\n";
        }
    }
    echo "\n";
}

echo "🎯 Pruebas completadas!\n";
