# 📚 Biblioteca Digital

Este es el **backend** de una plataforma de gestión de libros, autores y usuarios para una biblioteca digital.

---

## Inicio Rápido

Sigue estos pasos para tener el proyecto funcionando en tu entorno local.

---

### Requisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: **16 o superior**)
- **npm** (incluido con Node.js)

---

### Instalación

Clona el repositorio y ejecuta el comando de instalación para descargar todas las dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/tu_usuario/nombre_del_repositorio.git

# Entrar en la carpeta del proyecto
cd nombre_del_repositorio

# Instalar dependencias
npm install
```

### Configuración del Entorno (.env)

Para que el proyecto se conecte correctamente a la base de datos y maneje la autenticación, debes crear un archivo llamado **`.env`** en la raíz del proyecto.

Este archivo debe contener las variables de entorno necesarias, como la cadena de conexión a la base de datos y la llave secreta para JWT (JSON Web Tokens).

**Ejemplo de estructura básica del archivo `.env`:**

```env
DB_CONNECTION=tu_cadena_de_conexion_a_la_bd
JWT_SECRET=tu_llave_secreta_aqui
PORT=3000
```

**Importante**: No subas el archivo .env al repositorio.
Agrega .env a tu archivo .gitignore.

### Compilación y Ejecución

Una vez configurado el archivo `.env`, compila el código TypeScript a JavaScript y luego ejecuta la aplicación:

```bash
# 1. Compilar el código (TypeScript a JavaScript)
npm run build

# 2. Iniciar el servidor (modo desarrollo)
npm run start:dev
```

El servidor estará disponible en el puerto configurado (por defecto: http://localhost:3000).

