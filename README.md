📚 Biblioteca Digital /ln
Este es el backend de una plataforma de gestión de libros, autores y usuarios para una biblioteca digital.

Inicio Rápido
Sigue estos pasos para tener el proyecto funcionando en tu entorno local.

1. Requisitos
Asegúrate de tener instalado:

Node.js (versión recomendada: 16 o superior)
npm (incluido con Node.js)

2. Instalación
Clona el repositorio y ejecuta el comando de instalación para descargar todas las dependencias:

# Instalar dependencias
npm install

3. Configuración del Entorno (.env)
Para que el proyecto se conecte correctamente a la base de datos y maneje la autenticación, debes crear un archivo llamado .env en la raíz del proyecto.

Este archivo debe contener las variables de entorno necesarias, como la cadena de conexión a la base de datos y la llave secreta para JWT (JSON Web Tokens).

Ejemplo de estructura básica del archivo .env:



DB_CONNECTION=tu_cadena_de_conexion_a_la_bd
JWT_SECRET=tu_llave_secreta_aqui
PORT=3000
Nota: No subas el archivo .env al repositorio. Agrega .env a tu archivo .gitignore.

4. Compilación y Ejecución
Una vez configurado el archivo .env, compila el código TypeScript a JavaScript y luego ejecuta la aplicación:

# 1. Compilar el código (TypeScript a JavaScript)
npm run build

# 2. Iniciar el servidor (para desarrollo)
npm run start:dev
El servidor estará disponible en el puerto configurado (ej. http://localhost:3000).

Nota: Si prefieres una ejecución en producción, usa npm start después de compilar.
