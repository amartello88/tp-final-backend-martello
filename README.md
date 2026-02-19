# TP Final Backend - API REST

API REST desarrollada con TypeScript, Express y MongoDB para la materia Desarrollo Web Backend - UTN.

## Tecnologías utilizadas

- TypeScript
- Express
- MongoDB + Mongoose
- Zod (validación)
- bcryptjs (hash de contraseñas)
- JWT (autenticación)
- dotenv
- cors

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/amartello88/tp-final-backend-martello.git
cd tp-final-backend-martello
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear el archivo `.env` basándose en `.env.example`:
```bash
cp .env.example .env
```

4. Completar las variables de entorno en `.env`:
```
PORT=3000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
```

## Ejecución

Modo desarrollo:
```bash
npm run dev
```

Modo producción:
```bash
npm run build
npm start
```

## Endpoints

### Auth
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/auth/register` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |

### Productos
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/products` | Obtener todos los productos | Sí |
| GET | `/products?minPrice=1000` | Filtrar por precio mínimo | Sí |
| GET | `/products?maxPrice=5000` | Filtrar por precio máximo | Sí |
| GET | `/products?name=zapatilla` | Filtrar por nombre | Sí |
| GET | `/products/:id` | Obtener producto por ID | Sí |
| POST | `/products` | Crear producto | Sí |
| PATCH | `/products/:id` | Actualizar producto | Sí |
| DELETE | `/products/:id` | Eliminar producto | Sí |

### Categorías
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/categories` | Obtener todas las categorías | Sí |
| GET | `/categories/:id` | Obtener categoría por ID | Sí |
| POST | `/categories` | Crear categoría | Sí |

### Usuarios
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/users` | Obtener todos los usuarios | Sí |

## Autenticación

Las rutas protegidas requieren un token JWT en el header:
```
Authorization: Bearer <token>
```

El token se obtiene al hacer login en `/auth/login`.

## Filtrado por query params

Los productos se pueden filtrar combinando parámetros:
```
GET /products?minPrice=1000&maxPrice=5000&name=zapatilla
```

## Peticiones CURL

##### Registro
```sh
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "Maria", "email": "maria@gmail.com", "password": "12345"}'
```

##### Login
```sh
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "maria@gmail.com", "password": "12345"}'
```

##### Obtener productos
```sh
curl http://localhost:3000/products \
  -H "Authorization: Bearer <token>"
```

##### Filtrar productos
```sh
curl "http://localhost:3000/products?minPrice=1000&maxPrice=5000" \
  -H "Authorization: Bearer <token>"
```

##### Agregar producto
```sh
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"name": "Zapatillas", "price": 5000, "stock": 100, "category": "ID_CATEGORIA", "description": "Zapatillas blancas"}'
```

##### Modificar producto
```sh
curl -X PATCH http://localhost:3000/products/ID_PRODUCTO \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"price": 4999, "stock": 50}'
```

##### Borrar producto
```sh
curl -X DELETE http://localhost:3000/products/ID_PRODUCTO \
  -H "Authorization: Bearer <token>"
```
## Frontend

Interfaz desarrollada en HTML, CSS y JavaScript vanilla.

🔗 [Ver frontend](https://tp-final-frontendbackend-martello.vercel.app/)