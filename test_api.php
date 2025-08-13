<?php

/**
 * Script de prueba para verificar la API
 */

echo "🧪 Probando la API...\n\n";

// 1. Probar endpoint de test
echo "1. Probando endpoint de test...\n";
$testUrl = 'http://localhost:8080/api/test';
$testResponse = file_get_contents($testUrl);
echo "Respuesta: " . $testResponse . "\n\n";

// 2. Probar login
echo "2. Probando login...\n";
$loginData = [
    'email' => 'admin@asn.com',
    'password' => 'Admin123!'
];

$loginContext = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/json',
        'content' => json_encode($loginData)
    ]
]);

$loginUrl = 'http://localhost:8080/api/login';
$loginResponse = file_get_contents($loginUrl, false, $loginContext);

if ($loginResponse === false) {
    echo "❌ Error al conectar con el servidor\n";
    echo "Asegúrate de que el servidor esté corriendo en http://localhost:8080\n";
} else {
    echo "✅ Login exitoso:\n";
    echo $loginResponse . "\n\n";

    // 3. Probar endpoint de honorarios
    echo "3. Probando endpoint de honorarios...\n";
    $honorariosUrl = 'http://localhost:8080/api/honorarios';
    $honorariosResponse = file_get_contents($honorariosUrl);

    if ($honorariosResponse === false) {
        echo "❌ Error al obtener honorarios\n";
    } else {
        echo "✅ Honorarios obtenidos correctamente\n";
        $honorariosData = json_decode($honorariosResponse, true);
        echo "Valor ASMENUT: " . $honorariosData['valor_asmenut'] . "\n";
        echo "Categorías: " . count($honorariosData['categorias']) . "\n\n";
    }
}

echo "🎯 Pruebas completadas!\n";
