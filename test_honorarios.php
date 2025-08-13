<?php

/**
 * Script para probar el endpoint de honorarios
 */

echo "💰 Probando endpoint de honorarios...\n\n";

// 1. Probar endpoint público de honorarios
echo "1. Probando endpoint público de honorarios...\n";
$honorariosResponse = file_get_contents('http://localhost:8080/api/honorarios');

if ($honorariosResponse === false) {
    echo "  ❌ Error al obtener honorarios\n";
} else {
    $honorariosData = json_decode($honorariosResponse, true);
    if (isset($honorariosData['valor_asmenut'])) {
        echo "  ✅ Honorarios obtenidos correctamente\n";
        echo "  Valor ASMENUT: " . $honorariosData['valor_asmenut'] . "\n";
        echo "  Categorías: " . count($honorariosData['categorias']) . "\n";

        // Mostrar algunas categorías
        foreach (array_slice($honorariosData['categorias'], 0, 3) as $categoria) {
            echo "    - " . $categoria['nombre'] . " (" . count($categoria['servicios']) . " servicios)\n";
        }
    } else {
        echo "  ❌ Formato de respuesta inesperado\n";
        echo "  Respuesta: " . $honorariosResponse . "\n";
    }
}

echo "\n2. Probando endpoint de configuración...\n";
$configResponse = file_get_contents('http://localhost:8080/api/honorarios/configuracion');

if ($configResponse === false) {
    echo "  ❌ Error al obtener configuración\n";
} else {
    $configData = json_decode($configResponse, true);
    if (isset($configData['valor_asmenut'])) {
        echo "  ✅ Configuración obtenida correctamente\n";
        echo "  Valor ASMENUT: " . $configData['valor_asmenut'] . "\n";
        echo "  Fecha vigencia: " . $configData['fecha_vigencia'] . "\n";
    } else {
        echo "  ❌ Formato de respuesta inesperado\n";
    }
}

echo "\n🎯 Pruebas de honorarios completadas!\n";
