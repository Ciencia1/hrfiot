const cors = require('cors');

const corsOptions = {
  origin: 'https://iot.hospitalprivado.com.ar', // Reemplaza con el dominio de tu aplicación
  methods: ['GET', 'POST'],
  credentials: true
};

module.exports = cors(corsOptions);
