<?php

/**
 * Script de Configuración del Super Usuario Administrador
 * 
 * Este script configura automáticamente:
 * - Shield (sistema de autenticación)
 * - Grupos de usuarios
 * - Usuario administrador
 * - Base de datos
 */

// Verificar que se ejecute desde la línea de comandos
if (php_sapi_name() !== 'cli') {
    die('Este script debe ejecutarse desde la línea de comandos.');
}

echo "🚀 Configurando Super Usuario Administrador...\n\n";

// 1. Configurar Shield
echo "📦 Configurando Shield...\n";
$output = shell_exec('php spark shield:setup 2>&1');
echo $output . "\n";

// 2. Ejecutar migraciones
echo "🗄️ Ejecutando migraciones...\n";
$output = shell_exec('php spark migrate 2>&1');
echo $output . "\n";

// 3. Ejecutar seeder de configuración
echo "👤 Creando usuario administrador...\n";
$output = shell_exec('php spark db:seed SetupSeeder 2>&1');
echo $output . "\n";

// 4. Ejecutar seeder de honorarios
echo "💰 Configurando honorarios...\n";
$output = shell_exec('php spark db:seed HonorariosSeeder 2>&1');
echo $output . "\n";

echo "✅ Configuración completada exitosamente!\n\n";

echo "📋 Resumen de la configuración:\n";
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
echo "👤 Usuario Administrador:\n";
echo "   Email: admin@asn.com\n";
echo "   Contraseña: Admin123!\n";
echo "   Rol: Administrador\n\n";

echo "🔗 Endpoints de API:\n";
echo "   Login: POST /api/login\n";
echo "   Honorarios: GET /api/honorarios\n";
echo "   Admin Users: GET /api/admin/users\n\n";

echo "🧪 Para probar el sistema:\n";
echo "   1. Iniciar servidor: php spark serve --port=8080\n";
echo "   2. Probar login: curl -X POST http://localhost:8080/api/login\n";
echo "   3. Verificar honorarios: curl http://localhost:8080/api/honorarios\n\n";

echo "📚 Documentación:\n";
echo "   - ADMIN_SETUP.md - Configuración del administrador\n";
echo "   - HONORARIOS_SETUP.md - Configuración de honorarios\n";
echo "   - LOGIN_SETUP.md - Configuración del login\n\n";

echo "🎯 ¡El sistema está listo para usar!\n";
