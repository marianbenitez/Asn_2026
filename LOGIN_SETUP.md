# Configuración del Sistema de Login

## 🔧 **Configuración del Backend (CodeIgniter 4 + Shield)**

### 1. **Verificar Configuración de Shield**

El backend ya tiene configurado CodeIgniter Shield para autenticación. Verificar que los siguientes archivos estén correctos:

- `Back_asn/app/Config/Auth.php` - Configuración de autenticación
- `Back_asn/app/Config/Routes.php` - Rutas de la API
- `Back_asn/app/Config/Cors.php` - Configuración CORS

### 2. **Crear un Usuario de Prueba**

Para probar el login, necesitas crear un usuario en la base de datos. Puedes hacerlo de varias formas:

#### Opción A: Usando el Seeder de Shield

```bash
cd Back_asn
php spark shield:setup
```

#### Opción B: Crear usuario manualmente

```sql
INSERT INTO users (email, password_hash, created_at, updated_at)
VALUES ('admin@test.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW());
-- La contraseña es 'password'
```

#### Opción C: Usando la API de registro

```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","password":"password123"}'
```

### 3. **Verificar el Servidor Backend**

Asegúrate de que el servidor backend esté corriendo:

```bash
cd Back_asn
php spark serve --host=0.0.0.0 --port=8080
```

## 🔧 **Configuración del Frontend (Astro + React)**

### 1. **Configuración de Entorno**

Crear un archivo `.env` en la raíz del proyecto Front_asn:

```env
# Configuración de la API
PUBLIC_API_URL=http://localhost:8080/api
PUBLIC_DEBUG=true

# Configuración de desarrollo
NODE_ENV=development
```

### 2. **Instalar Dependencias**

```bash
cd Front_asn
npm install
```

### 3. **Ejecutar el Servidor de Desarrollo**

```bash
npm run dev
```

## 🧪 **Pruebas del Sistema**

### 1. **Probar Conexión Básica**

Visita: `http://localhost:4321/test`

### 2. **Probar Login**

Visita: `http://localhost:4321/login`

Credenciales de prueba:

- Email: `admin@test.com`
- Contraseña: `password`

### 3. **Verificar Token**

Después del login exitoso, verifica que el token se guarde en localStorage:

```javascript
// En la consola del navegador
localStorage.getItem("authToken");
```

## 🔍 **Solución de Problemas**

### **Error: CORS**

Si ves errores de CORS, verifica:

1. Que el backend esté corriendo en `http://localhost:8080`
2. Que el frontend esté corriendo en `http://localhost:4321`
3. Que la configuración CORS en `Back_asn/app/Config/Cors.php` incluya el puerto correcto

### **Error: "Credenciales inválidas"**

1. Verifica que el usuario existe en la base de datos
2. Asegúrate de que la contraseña sea correcta
3. Verifica que Shield esté configurado correctamente

### **Error: "No se pudo conectar con el servidor"**

1. Verifica que el backend esté corriendo
2. Verifica la URL de la API en la configuración
3. Verifica que no haya firewall bloqueando las conexiones

### **Error: "Token inválido"**

1. Verifica que el token se esté enviando correctamente en el header Authorization
2. Verifica que el token no haya expirado
3. Verifica la configuración del filtro AuthTokenFilter

## 📁 **Archivos Importantes**

### Backend

- `Back_asn/app/Controllers/Api/UserController.php` - Controlador de login
- `Back_asn/app/Config/Routes.php` - Rutas de la API
- `Back_asn/app/Config/Auth.php` - Configuración de autenticación
- `Back_asn/app/Config/Cors.php` - Configuración CORS
- `Back_asn/app/Filters/AuthTokenFilter.php` - Filtro de autenticación

### Frontend

- `Front_asn/src/services/api.js` - Servicio de API
- `Front_asn/src/hooks/useAuth.ts` - Hook de autenticación
- `Front_asn/src/components/LoginForm.tsx` - Componente de login
- `Front_asn/src/config/environment.ts` - Configuración de entorno

## 🚀 **Próximos Pasos**

1. **Implementar registro de usuarios**
2. **Agregar validación de contraseñas**
3. **Implementar recuperación de contraseña**
4. **Agregar roles y permisos**
5. **Implementar refresh tokens**
6. **Agregar logging de autenticación**
