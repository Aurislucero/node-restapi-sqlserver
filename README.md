# REST API node-restapi-sqlserver

Esta es una REST API construida con Express para interactuar con SQL Server. Proporciona varios endpoints para manejar productos. A continuación, se describen los detalles del proyecto y las instrucciones para ejecutarlo.

## Endpoints

### GET /products
Obtiene todos los productos.

- **Respuesta exitosa**:
  - Código: 200
  - Tipo: JSON
  - Descripción: Devuelve una lista de productos.

### POST /products
Crea un nuevo producto.

- **Parámetros del cuerpo**:
  - `name`: El nombre del producto (cadena de texto).
  - `price`: El precio del producto (número).
  - `description`: La descripción del producto (cadena de texto).

- **Respuesta exitosa**:
  - Código: 201
  - Tipo: JSON
  - Descripción: Devuelve el producto creado.

### GET /products/count
Obtiene el número total de productos.

- **Respuesta exitosa**:
  - Código: 200
  - Tipo: JSON
  - Descripción: Devuelve el número total de productos.

### DELETE /products/:id
Elimina un producto por su ID.

- **Parámetros**:
  - `id`: El ID del producto (cadena de texto).

- **Respuesta exitosa**:
  - Código: 200
  - Tipo: JSON
  - Descripción: Confirma la eliminación del producto.

### GET /products/:id
Obtiene un producto por su ID.

- **Parámetros**:
  - `id`: El ID del producto (cadena de texto).

- **Respuesta exitosa**:
  - Código: 200
  - Tipo: JSON
  - Descripción: Devuelve el producto con el ID especificado.

### PUT /products/:id
Actualiza un producto por su ID.

- **Parámetros**:
  - `id`: El ID del producto (cadena de texto).

- **Parámetros del cuerpo**:
  - `name`: El nuevo nombre del producto (cadena de texto).
  - `price`: El nuevo precio del producto (número).
  - `description`: La nueva descripción del producto (cadena de texto).

- **Respuesta exitosa**:
  - Código: 200
  - Tipo: JSON
  - Descripción: Devuelve el producto actualizado.

## Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js (versión 14+)
- NPM

### Pasos para Iniciar el Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Aurislucero/node-restapi-sqlserver.git
2. Instalar dependencias
   ```bash
   npm install
4. Si tu proyecto requiere una etapa de compilación (por ejemplo, usando Babel), ejecuta el script de compilación para crear los archivos distribuidos.
   ```bash
   npm run build
6. Si deseas trabajar en modo de desarrollo, que permite la recarga automática y otras herramientas útiles para desarrolladores, inicia el proyecto con nodemon.
   ```bash
   npm run dev
8. Para un entorno de producción, donde no necesitas recarga automática, usa el siguiente comando:
   ```bash
   npm start
