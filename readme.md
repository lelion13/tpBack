
# 🚀 TP Back - Diplo Full Stack

## 📌 Descripción  
Este proyecto es una **API REST** desarrollada como trabajo final para la **Diplomatura en Desarrollo Web Full Stack** de la **UTN**.  

Permite realizar operaciones **CRUD** sobre los siguientes modelos:  
- 👤 **Usuarios (User)**  
- 📦 **Productos (Product)**  
- 📂 **Categorías (Category)**  

---

## 🛠 Tecnologías Usadas  
🔹 **Node.js**  
🔹 **Express.js**  
🔹 **MongoDB** con **Mongoose**  
🔹 **jsonwebtoken**  
🔹 **bcrypt**  
🔹 **dotenv**  

---

## ⚙️ Requisitos Previos  
Antes de ejecutar este proyecto, asegúrate de tener instalado:  
✔️ **Node.js**  
✔️ **MongoDB** (o conexión a **MongoDB Atlas**)  
✔️ **Visual Studio Code** con **Thunder Client**  
✔️ **Dependencias del proyecto**  

---

## 🚀 Instalación  
Sigue estos pasos para instalar y ejecutar la API:  

### 1️⃣ Clonar el repositorio  
```sh
git clone https://github.com/lelion13/tpBack.git
```

### 2️⃣ Instalar dependencias  
Accede a la carpeta raíz del proyecto y ejecuta:  
```sh
npm install
```

### 3️⃣ Configurar variables de entorno  
Asegúrate de que el archivo **.env** esté configurado correctamente con las credenciales para conectar a **MongoDB Atlas**.  
📌 **Revisa el archivo `.env.example`** como referencia.

### 4️⃣ Iniciar el servidor  
Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:  
```sh
npm run dev
```

---

## 🌐 Rutas Principales de la API  

### 👤 **User**  
📌 `GET` - `/api/user/get` → Obtener todos los usuarios  
📌 `POST` - `/api/user/create` → Crear un usuario  
📌 `DELETE` - `/api/user/delete/:id` → Eliminar un usuario  
📌 `PUT` - `/api/user/update/:id` → Modificar un usuario  

### 📦 **Product**  
📌 `GET` - `/api/product/get` → Obtener todos los productos  
📌 `POST` - `/api/product/create` → Crear un producto  
📌 `DELETE` - `/api/product/delete/:id` → Eliminar un producto  
📌 `PUT` - `/api/product/update/:id` → Modificar un producto  

### 📂 **Category**  
📌 `GET` - `/api/category/get` → Obtener todas las categorías  
📌 `POST` - `/api/category/create` → Crear una categoría  
📌 `DELETE` - `/api/category/delete/:id` → Eliminar una categoría  
📌 `PUT` - `/api/category/update/:id` → Modificar una categoría  

---

## 🔧 **Ejemplos de Datos Mock**  
Para realizar pruebas rápidas con **Thunder Client**, importa los siguientes archivos:  

📂 **Categorías** → `thunder-collection_Category.json`  
📂 **Productos** → `thunder-collection_Product.json`  
📂 **Usuarios** → `thunder-collection_User.json`  

📌 **Thunder Client** es una extensión de VS Code para probar APIs.  
🔗 [Descargar Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)  

---

💡 **¡Listo para probar!** Si tienes dudas, revisa la documentación o contribuye al proyecto. 🎯🚀  
```

Este `README.md` ahora tiene una estructura más atractiva con iconos y secciones bien organizadas.  
Déjame saber si quieres agregar algo más. 😃🔥
