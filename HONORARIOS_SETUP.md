# Sistema de Honorarios Mínimos - Configuración

## 📊 **Descripción del Sistema**

El sistema de honorarios mínimos permite gestionar y actualizar fácilmente los valores de honorarios profesionales de nutricionistas. Los datos se almacenan en la base de datos y se pueden actualizar sin necesidad de modificar código.

## 🗄️ **Estructura de Base de Datos**

### **Tablas Creadas:**

1. **`honorarios_categorias`** - Categorías de servicios
2. **`honorarios_servicios`** - Servicios específicos con sus valores
3. **`honorarios_configuracion`** - Configuración del valor ASMENUT

### **Campos Principales:**

**Categorías:**

- `nombre` - Nombre de la categoría
- `icono` - Icono para mostrar (stethoscope, users, home, etc.)
- `descripcion` - Descripción opcional
- `orden` - Orden de visualización
- `activo` - Si está activa

**Servicios:**

- `categoria_id` - ID de la categoría
- `nombre` - Nombre del servicio
- `unidades_asmenut` - Unidades ASMENUT
- `monto_fijo` - Monto fijo (opcional)
- `monto_por_hora` - Monto por hora (opcional)
- `monto_mensual` - Monto mensual (opcional)
- `orden` - Orden de visualización
- `activo` - Si está activo

**Configuración:**

- `valor_asmenut` - Valor actual del ASMENUT
- `fecha_vigencia` - Fecha desde la cual es válida
- `descripcion` - Descripción de la configuración
- `activo` - Si es la configuración activa

## 🚀 **Instalación y Configuración**

### **1. Ejecutar Migraciones**

```bash
cd Back_asn
php spark migrate
```

### **2. Cargar Datos Iniciales**

```bash
php spark db:seed HonorariosSeeder
```

### **3. Verificar el Servidor Backend**

```bash
php spark serve --host=0.0.0.0 --port=8080
```

## 📡 **API Endpoints**

### **Endpoints Públicos (sin autenticación):**

**Obtener todos los honorarios:**

```
GET /api/honorarios
```

**Obtener configuración actual:**

```
GET /api/honorarios/configuracion
```

**Obtener categorías:**

```
GET /api/honorarios/categorias
```

**Obtener servicios por categoría:**

```
GET /api/honorarios/servicios/{categoria_id}
```

### **Endpoints de Administración (requieren autenticación):**

**Crear nueva configuración:**

```
POST /api/admin/honorarios/configuracion
{
  "valor_asmenut": 5000,
  "fecha_vigencia": "2025-01-01",
  "descripcion": "Nueva configuración"
}
```

**Activar configuración:**

```
PUT /api/admin/honorarios/configuracion/{id}/activar
```

**Crear categoría:**

```
POST /api/admin/honorarios/categorias
{
  "nombre": "Nueva Categoría",
  "icono": "calculator",
  "descripcion": "Descripción opcional",
  "orden": 1
}
```

**Crear servicio:**

```
POST /api/admin/honorarios/servicios
{
  "categoria_id": 1,
  "nombre": "Nuevo Servicio",
  "unidades_asmenut": 5,
  "monto_fijo": 25000,
  "orden": 1
}
```

## 🔧 **Actualización de Valores**

### **Actualizar Valor ASMENUT:**

1. **Crear nueva configuración:**

```bash
curl -X POST http://localhost:8080/api/admin/honorarios/configuracion \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "valor_asmenut": 6000,
    "fecha_vigencia": "2025-07-01",
    "descripcion": "Actualización Julio 2025"
  }'
```

2. **Activar la nueva configuración:**

```bash
curl -X PUT http://localhost:8080/api/admin/honorarios/configuracion/2/activar \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### **Actualizar Servicios:**

1. **Agregar nuevo servicio:**

```bash
curl -X POST http://localhost:8080/api/admin/honorarios/servicios \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "categoria_id": 1,
    "nombre": "Nuevo Servicio",
    "unidades_asmenut": 8,
    "monto_fijo": 40000
  }'
```

2. **Modificar servicio existente (directamente en BD):**

```sql
UPDATE honorarios_servicios
SET monto_fijo = 30000
WHERE id = 1;
```

## 📱 **Frontend**

El componente `HonorariosMinimos.tsx` ahora:

- ✅ Carga datos desde la API
- ✅ Muestra loading mientras carga
- ✅ Maneja errores de conexión
- ✅ Permite reintentar en caso de error
- ✅ Calcula montos automáticamente

## 🎯 **Ventajas del Sistema**

1. **Flexibilidad:** Los valores se pueden actualizar sin tocar código
2. **Historial:** Se mantiene historial de configuraciones
3. **Cálculo Automático:** Los montos se calculan automáticamente
4. **API RESTful:** Fácil integración con otros sistemas
5. **Validación:** Validación de datos en backend
6. **Seguridad:** Endpoints de administración protegidos

## 🔍 **Pruebas**

### **Probar API:**

```bash
# Obtener honorarios
curl http://localhost:8080/api/honorarios

# Obtener configuración
curl http://localhost:8080/api/honorarios/configuracion
```

### **Probar Frontend:**

1. Visitar: `http://localhost:4321/honorarios`
2. Verificar que cargan los datos
3. Probar la búsqueda
4. Probar expandir/contraer secciones

## 📋 **Datos Iniciales Cargados**

El seeder carga automáticamente:

- ✅ 8 categorías principales
- ✅ 50+ servicios con valores actualizados
- ✅ Configuración inicial con valor ASMENUT = 5000
- ✅ Todos los datos del nomenclador actual

## 🚀 **Próximos Pasos**

1. **Panel de Administración:** Crear interfaz web para gestionar honorarios
2. **Historial de Cambios:** Registrar quién y cuándo hizo cambios
3. **Notificaciones:** Alertar cuando se actualicen valores
4. **Exportación:** Permitir exportar a PDF/Excel
5. **Versiones:** Sistema de versionado de configuraciones
6. **Auditoría:** Log de todas las modificaciones

## 📞 **Soporte**

Para cualquier problema o consulta sobre el sistema de honorarios, revisar:

- Logs del servidor: `Back_asn/writable/logs/`
- Configuración de base de datos: `Back_asn/app/Config/Database.php`
- Configuración CORS: `Back_asn/app/Config/Cors.php`
