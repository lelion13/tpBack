# TP Back - Diplo Full Stack

## Descripción

Este proyecto es una API REST desarrollada como trabajo final para la Diplomatura en Desarrollo Web Full Stack de la UTN. La API permite realizar operaciones CRUD sobre los siguientes modelos:

- **User** (Usuarios)
- **Product** (Productos)
- **Category** (Categorías)

## Tecnologías Usadas

- Node.js
- Express.js
- MongoDB con Mongoose
- JSON Web Token (JWT)
- Bcrypt
- Dotenv

## Requisitos Previos

Para ejecutar este proyecto, necesitas instalar:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) (opcional para pruebas API)
- Node.js y npm

## Instalación

### 1. Clonar el repositorio

```sh
git clone https://github.com/lelion13/tpBack.git
cd tpBack
```

### 2. Instalar dependencias

```sh
npm install
```

### 3. Configurar variables de entorno

Asegúrate de que el archivo `.env` esté configurado con las credenciales correctas para conectar a MongoDB Atlas. Puedes usar el archivo `.env.example` como referencia.

### 4. Iniciar el servidor

Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:

```sh
npm run dev
```

## Rutas Principales de la API

### **Usuarios (User)**

- **GET** - `/api/user/get` → Obtener todos los usuarios
- **POST** - `/api/user/create` → Crear un usuario (requiere token y rol de ADMIN)
- **DELETE** - `/api/user/delete/:id` → Eliminar un usuario (requiere token y rol de ADMIN)
- **PUT** - `/api/user/update/:id` → Actualizar un usuario (requiere token y rol de ADMIN)
- **POST** - `/api/user/login` → Si el usuario y la contraseña es valido devuelve un token

### **Productos (Product)**

- **GET** - `/api/product/get` → Obtener todos los productos
- **POST** - `/api/product/create` → Crear un producto (requiere autenticación)
- **DELETE** - `/api/product/delete/:id` → Eliminar un producto (requiere autenticación)
- **PUT** - `/api/product/update/:id` → Actualizar un producto (requiere autenticación)

### **Categorías (Category)**

- **GET** - `/api/category/get` → Obtener todas las categorías
- **POST** - `/api/category/create` → Crear una categoría (requiere autenticación)
- **DELETE** - `/api/category/delete/:id` → Eliminar una categoría (requiere autenticación)
- **PUT** - `/api/category/update/:id` → Actualizar una categoría (requiere autenticación)

## Autenticación

Esta API utiliza **JSON Web Tokens (JWT)** para la autenticación. Algunas rutas requieren un token válido para su acceso.

## 🔧 Ejemplos de Datos Mock

Puedes importar los archivos en **Thunder Client** para realizar pruebas básicas de la API:

- **Categorías** → `thunder-collection_Category.json`
- **Productos** → `thunder-collection_Product.json`
- **Usuarios** → `thunder-collection_User.json`

---

**Autor:** Leandro Lion - [lelion13](https://github.com/lelion13)

