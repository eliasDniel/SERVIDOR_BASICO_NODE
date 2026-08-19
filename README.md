**# CRUD Básico en Node.js

API REST simple que implementa las operaciones básicas de Crear, Leer, Actualizar y Eliminar (CRUD) utilizando Node.js, Express y MongoDB.

## Tecnologías utilizadas

- **Node.js** — Entorno de ejecución
- **Express** — Framework para el servidor y las rutas
- **MongoDB** — Base de datos NoSQL
- **Mongoose** — ODM para modelar los datos y conectar con MongoDB
- **dotenv** — Manejo de variables de entorno

## Requisitos previos

- Node.js instalado (v18 o superior recomendado)
- MongoDB corriendo localmente o una instancia en MongoDB Atlas
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/nombre_base_datos
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

   O en modo desarrollo (con recarga automática):
   ```bash
   npm run dev
   ```

El servidor quedará disponible en `http://localhost:3000`.

## Endpoints de la API

| Método | Ruta              | Descripción                     |
|--------|-------------------|----------------------------------|
| GET    | `/api/items`      | Obtiene todos los registros      |
| GET    | `/api/items/:id`  | Obtiene un registro por su ID    |
| POST   | `/api/items`      | Crea un nuevo registro           |
| PUT    | `/api/items/:id`  | Actualiza un registro existente  |
| DELETE | `/api/items/:id`  | Elimina un registro              |

### Ejemplo de body para POST/PUT

```json
{
  "nombre": "Ejemplo",
  "descripcion": "Descripción del elemento",
  "cantidad": 10
}
```

## Estructura del proyecto

```
├── src/
│   ├── models/
│   │   └── item.model.js
│   ├── controllers/
│   │   └── item.controller.js
│   ├── routes/
│   │   └── item.routes.js
│   └── config/
│       └── db.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Scripts disponibles

- `npm start` — Inicia el servidor en modo producción
- `npm run dev` — Inicia el servidor en modo desarrollo con nodemon

## Licencia

Este proyecto está bajo la licencia MIT.**
