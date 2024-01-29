const express = require('express');
const dotenv = require('dotenv');

// Configuración de dotenv para cargar variables de entorno desde .env
dotenv.config();

const app = express();

// Obtener el puerto de las variables de entorno o usar el valor predeterminado 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`El servidor está ejecutándose en el puerto ${PORT}`);
});

// Conexión a la base de datos usando la cadena de conexión de las variables de entorno
const dbConnectionString = process.env.DB_CONNECTION_STRING;
// Configuración de la clave secreta para autorización
const apiSecret = process.env.API_SECRET;

