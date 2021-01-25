// RUTAS DE VIAJES
//requerimos express
const express = require('express');

// Requerimos controllers
const viaje_controllers = require('../controllers/dreamTripControllers');

// Definimos
const viajeRouter = express.Router();

//RUTA OBTENER VIAJES
viajeRouter.get('/',viaje_controllers.obtenerViaje);

//RUTA POSTEAR VIAJE
viajeRouter.post('/agregar-viaje', viaje_controllers.agregarViaje);

//RUTA ELIMINAR VIAJE


// Exportamos las rutas
module.exports = viajeRouter;