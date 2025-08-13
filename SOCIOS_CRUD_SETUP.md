# Sistema CRUD de Socios - Documentación

## 📋 Descripción del Sistema

Se ha implementado un sistema completo de gestión de socios (CRUD) para la Asociación Sanjuanina de Nutrición. El sistema permite crear, leer, actualizar y eliminar socios, con una interfaz de administración completa.

## 🗄️ Estructura de Base de Datos

### Tabla: `socios`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | INT AUTO_INCREMENT | Identificador único |
| `numero_socio` | VARCHAR(20) UNIQUE | Número de socio (formato: ASN0001) |
| `dni` | VARCHAR(20) UNIQUE | Documento Nacional de Identidad |
| `nombre` | VARCHAR(100) | Nombre del socio |
| `apellido` | VARCHAR(100) | Apellido del socio |
| `email` | VARCHAR(255) UNIQUE | Correo electrónico |
| `telefono` | VARCHAR(20) | Número de teléfono (opcional) |
| `domicilio` | TEXT | Dirección completa (opcional) |
| `fecha_nacimiento` | DATE | Fecha de nacimiento (opcional) |
| `fecha_ingreso` | DATE | Fecha de ingreso a la asociación |
| `estado` | ENUM | 'activo', 'inactivo', 'suspendido' |
| `tipo_socio` | ENUM | 'titular', 'adherente', 'estudiante' |
| `universidad` | VARCHAR(255) | Universidad de origen (opcional) |
| `matricula_profesional` | VARCHAR(50) | Número de matrícula (opcional) |
| `fecha_graduacion` | DATE | Fecha de graduación (opcional) |
| `observaciones` | TEXT | Notas adicionales (opcional) |
| `user_id` | INT | ID de usuario asociado (opcional, FK) |
| `created_at` | DATETIME | Fecha de creación |
| `updated_at` | DATETIME | Fecha de última actualización |

## 🚀 Instalación y Configuración

### 1. Ejecutar Migraciones

```bash
cd Back_asn
php spark migrate
```

### 2. Cargar Datos de Prueba

```bash
php spark db:seed SociosSeeder
```

### 3. Verificar Servidor Backend

```bash
php spark serve --host=0.0.0.0 --port=8080
```

### 4. Verificar Frontend

```bash
cd Front_asn
npm run dev
```

## 📡 API Endpoints

### Endpoints Protegidos (requieren autenticación)

**Gestión de Socios:**
```
GET    /api/admin/socios/              # Listar socios (con paginación y búsqueda)
GET    /api/admin/socios/{id}          # Obtener socio específico
POST   /api/admin/socios/              # Crear nuevo socio
PUT    /api/admin/socios/{id}          # Actualizar socio
DELETE /api/admin/socios/{id}          # Eliminar socio
```

**Estadísticas y Búsquedas:**
```
GET    /api/admin/socios/stats         # Estadísticas de socios
GET    /api/admin/socios/search/dni    # Buscar por DNI (?dni=12345678)
GET    /api/admin/socios/search/numero # Buscar por número (?numero=ASN0001)
GET    /api/admin/socios/estado/{estado}  # Filtrar por estado
GET    /api/admin/socios/tipo/{tipo}   # Filtrar por tipo
```

### Parámetros de Consulta

**Para listado de socios:**
- `page`: Número de página (default: 1)
- `limit`: Elementos por página (default: 10)
- `search`: Término de búsqueda (busca en nombre, apellido, DNI, número, email)

**Ejemplo:**
```
GET /api/admin/socios?page=1&limit=20&search=González
```

## 🖥️ Interfaz de Usuario

### Acceso al Sistema

1. **Dashboard Principal:** `http://localhost:4321/admin`
   - Sección "Socios" en el menú lateral
   - Link a la gestión completa

2. **Gestión Completa:** `http://localhost:4321/admin-socios`
   - Sistema CRUD completo
   - Tabla con paginación y búsqueda
   - Modales para crear/editar/ver detalles

### Funcionalidades de la Interfaz

**📊 Dashboard de Estadísticas:**
- Total de socios
- Socios por estado (activos, inactivos, suspendidos)
- Socios por tipo (titulares, adherentes, estudiantes)

**🔍 Búsqueda y Filtros:**
- Búsqueda global por nombre, apellido, DNI, número o email
- Filtros por estado y tipo de socio
- Paginación con navegación

**📝 Gestión de Socios:**
- **Crear:** Modal con formulario completo
- **Editar:** Modal pre-cargado con datos existentes
- **Ver:** Modal de solo lectura con todos los detalles
- **Eliminar:** Confirmación antes de eliminar

**📋 Información Mostrada:**
- Datos personales (nombre, apellido, DNI, email, teléfono)
- Información de socio (número, estado, tipo, fecha ingreso)
- Información académica (universidad, matrícula, fecha graduación)
- Observaciones adicionales

## 🔧 Funcionalidades del Backend

### Modelo SocioModel

**Validaciones Automáticas:**
- DNI único
- Email único
- Número de socio único
- Campos requeridos validados

**Funciones Especiales:**
- Generación automática de número de socio (ASN####)
- Búsquedas optimizadas
- Estadísticas calculadas
- Paginación incorporada

### Controlador SociosController

**Métodos Implementados:**
- `index()` - Listado con paginación y búsqueda
- `show($id)` - Mostrar socio específico
- `create()` - Crear nuevo socio
- `update($id)` - Actualizar socio existente
- `delete($id)` - Eliminar socio
- `stats()` - Estadísticas del sistema
- `searchByDni()` - Búsqueda por DNI
- `searchByNumero()` - Búsqueda por número
- `getByEstado($estado)` - Filtrar por estado
- `getByTipo($tipo)` - Filtrar por tipo

## 🧪 Datos de Prueba

El seeder incluye 10 socios de ejemplo con:
- **7 Activos, 1 Inactivo, 1 Suspendido**
- **5 Titulares, 3 Adherentes, 2 Estudiantes**
- Datos realistas de San Juan, Argentina
- Diferentes universidades y especialidades

## 🔐 Autenticación

Todos los endpoints de administración requieren:
- Token de autenticación válido
- Permisos de administrador
- Headers correctos (`Authorization: Bearer TOKEN`)

## 📱 Responsive Design

La interfaz es completamente responsive:
- **Desktop:** Tabla completa con todas las columnas
- **Tablet:** Tabla adaptada con información esencial
- **Mobile:** Vista optimizada para pantallas pequeñas

## 🎯 Casos de Uso

1. **Registrar Nuevo Socio:**
   - Completar formulario con datos requeridos
   - Número de socio se genera automáticamente
   - Validación en tiempo real

2. **Buscar Socio:**
   - Por nombre, apellido, DNI o email
   - Filtros por estado y tipo
   - Resultados paginados

3. **Actualizar Información:**
   - Editar cualquier campo excepto DNI
   - Mantener historial con timestamps
   - Validaciones de unicidad

4. **Gestionar Estados:**
   - Activar/desactivar socios
   - Suspender por motivos administrativos
   - Cambiar tipo de socio

5. **Reportes y Estadísticas:**
   - Dashboard con métricas clave
   - Distribución por tipos y estados
   - Datos para toma de decisiones

## 🚨 Validaciones

### Backend (CodeIgniter 4)
- DNI único en el sistema
- Email válido y único
- Campos requeridos: nombre, apellido, email, DNI
- Formatos de fecha válidos
- Estados y tipos válidos

### Frontend (React)
- Validación en tiempo real
- Mensajes de error descriptivos
- Confirmaciones para acciones destructivas
- Loading states durante operaciones

## 📈 Próximas Mejoras

1. **Exportación de Datos:** PDF, Excel, CSV
2. **Importación Masiva:** Carga desde archivos
3. **Historial de Cambios:** Log de modificaciones
4. **Comunicación:** Email masivo a socios
5. **Reportes Avanzados:** Gráficos y analytics
6. **Integración:** Conectar con sistema de pagos
7. **Notificaciones:** Alertas automáticas
8. **Backup:** Copias de seguridad automáticas

## 💡 Uso Recomendado

1. **Ejecutar migraciones** antes del primer uso
2. **Cargar datos de prueba** para testing
3. **Configurar autenticación** para administradores
4. **Probar funcionalidades** paso a paso
5. **Adaptar validaciones** según necesidades específicas
6. **Configurar backups** regulares de la base de datos

## 📞 Soporte

Para problemas o consultas:
- Revisar logs: `Back_asn/writable/logs/`
- Verificar permisos de base de datos
- Confirmar configuración CORS
- Validar tokens de autenticación

---

**¡Sistema CRUD de Socios implementado exitosamente!** 🎉