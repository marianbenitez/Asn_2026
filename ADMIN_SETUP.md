# Configuración del Super Usuario Administrador

## 🚀 **Creación del Super Usuario**

### **1. Ejecutar Migraciones de Shield**

```bash
cd Back_asn
php spark shield:setup
```

### **2. Ejecutar el Seeder de Configuración**

```bash
php spark db:seed SetupSeeder
```

### **3. Verificar la Creación**

El seeder creará automáticamente:

- ✅ Configuración de Shield
- ✅ Grupos de usuarios (admin, user, moderator)
- ✅ Usuario administrador

## 👤 **Credenciales del Super Usuario**

**Email:** `admin@asn.com`  
**Contraseña:** `Admin123!`  
**Rol:** Administrador  
**Estado:** Activo

## 🔧 **Configuración Manual (Alternativa)**

Si el seeder no funciona, puedes crear el usuario manualmente:

### **1. Configurar Shield**

```bash
cd Back_asn
php spark shield:setup
```

### **2. Crear Usuario Manualmente**

```bash
php spark shield:user admin@asn.com
```

### **3. Establecer Contraseña**

```bash
php spark shield:password admin@asn.com
```

### **4. Crear Grupos (SQL)**

```sql
INSERT INTO auth_groups (name, title, description) VALUES
('admin', 'Administrador', 'Acceso completo al sistema'),
('user', 'Usuario', 'Usuario regular'),
('moderator', 'Moderador', 'Moderador del sistema');
```

### **5. Asignar Usuario al Grupo Admin**

```sql
INSERT INTO auth_groups_users (user_id, group_id)
SELECT u.id, g.id
FROM users u, auth_groups g
WHERE u.email = 'admin@asn.com' AND g.name = 'admin';
```

## 📡 **API de Administración**

### **Endpoints Disponibles:**

**Gestión de Usuarios:**

```
GET    /api/admin/users/          # Listar usuarios
GET    /api/admin/users/{id}      # Obtener usuario específico
POST   /api/admin/users/          # Crear usuario
PUT    /api/admin/users/{id}      # Actualizar usuario
DELETE /api/admin/users/{id}      # Eliminar usuario
```

**Gestión de Grupos:**

```
GET    /api/admin/users/groups    # Listar grupos
POST   /api/admin/users/groups    # Crear grupo
```

**Estadísticas:**

```
GET    /api/admin/users/stats     # Estadísticas del sistema
```

### **Ejemplos de Uso:**

**1. Obtener todos los usuarios:**

```bash
curl -X GET http://localhost:8080/api/admin/users \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**2. Crear nuevo usuario:**

```bash
curl -X POST http://localhost:8080/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "email": "nuevo@asn.com",
    "username": "nuevo",
    "password": "Password123!",
    "first_name": "Nuevo",
    "last_name": "Usuario",
    "groups": ["user"]
  }'
```

**3. Obtener estadísticas:**

```bash
curl -X GET http://localhost:8080/api/admin/users/stats \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 🔐 **Autenticación**

### **1. Obtener Token de Acceso**

```bash
curl -X POST http://localhost:8080/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@asn.com",
    "password": "Admin123!"
  }'
```

### **2. Usar Token en Requests**

```bash
curl -X GET http://localhost:8080/api/admin/users \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 🛡️ **Seguridad**

### **Recomendaciones:**

1. **Cambiar contraseña después del primer login**
2. **Usar contraseñas fuertes**
3. **Limitar acceso a endpoints de administración**
4. **Revisar logs regularmente**
5. **Hacer backup de la base de datos**

### **Configuración de Seguridad:**

**En `app/Config/Auth.php`:**

```php
// Configurar políticas de contraseñas
public array $passwordValidationRules = [
    'min_length[8]',
    'max_length[255]',
    'strong_password'
];

// Configurar intentos de login
public int $maximumLoginAttempts = 5;
public int $lockoutTime = 900; // 15 minutos
```

## 📊 **Funcionalidades del Super Usuario**

### **Gestión de Usuarios:**

- ✅ Crear nuevos usuarios
- ✅ Editar información de usuarios
- ✅ Activar/desactivar usuarios
- ✅ Asignar roles y grupos
- ✅ Eliminar usuarios

### **Gestión de Grupos:**

- ✅ Crear nuevos grupos
- ✅ Editar grupos existentes
- ✅ Asignar permisos a grupos

### **Estadísticas del Sistema:**

- ✅ Ver total de usuarios
- ✅ Ver usuarios activos
- ✅ Ver usuarios recientes
- ✅ Ver grupos disponibles

### **Gestión de Honorarios:**

- ✅ Crear configuraciones de ASMENUT
- ✅ Activar configuraciones
- ✅ Crear categorías de servicios
- ✅ Crear servicios específicos

## 🔍 **Verificación**

### **1. Probar Login:**

```bash
curl -X POST http://localhost:8080/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@asn.com",
    "password": "Admin123!"
  }'
```

### **2. Verificar Acceso a Endpoints:**

```bash
# Obtener token del login anterior
TOKEN="tu_token_aqui"

# Probar endpoint de administración
curl -X GET http://localhost:8080/api/admin/users \
  -H "Authorization: Bearer $TOKEN"
```

### **3. Verificar en Base de Datos:**

```sql
-- Verificar usuario creado
SELECT * FROM users WHERE email = 'admin@asn.com';

-- Verificar grupos
SELECT * FROM auth_groups;

-- Verificar asignación de grupos
SELECT u.email, g.name
FROM users u
JOIN auth_groups_users ugu ON u.id = ugu.user_id
JOIN auth_groups g ON g.id = ugu.group_id
WHERE u.email = 'admin@asn.com';
```

## 🚨 **Solución de Problemas**

### **Error: "Shield no está configurado"**

```bash
cd Back_asn
php spark shield:setup
```

### **Error: "Usuario ya existe"**

El seeder verifica si el usuario existe antes de crearlo. Si necesitas recrearlo:

```sql
DELETE FROM users WHERE email = 'admin@asn.com';
```

### **Error: "Token inválido"**

1. Verificar que el login fue exitoso
2. Verificar que el token se está enviando correctamente
3. Verificar que el token no ha expirado

### **Error: "Acceso denegado"**

1. Verificar que el usuario tiene el grupo 'admin'
2. Verificar que el usuario está activo
3. Verificar la configuración de autenticación

## 📞 **Soporte**

Para problemas con el super usuario:

1. Revisar logs: `Back_asn/writable/logs/`
2. Verificar configuración de Shield
3. Verificar permisos de base de datos
4. Verificar configuración CORS

## 🎯 **Próximos Pasos**

1. **Panel de Administración Web:** Crear interfaz gráfica
2. **Gestión de Permisos:** Sistema granular de permisos
3. **Auditoría:** Log de todas las acciones administrativas
4. **Notificaciones:** Alertas de cambios importantes
5. **Backup Automático:** Sistema de respaldo automático
