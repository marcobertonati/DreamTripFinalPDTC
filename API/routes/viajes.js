// RUTAS DE VIAJES

// Son las rutas DEL SERVIDOR. Definimos lo que vamos a solicitarle al servidor a través de rutas. Si vaa consultar una base de datos, que nos va a traer, etc.

//requerimos express
const express = require('express');

// Requerimos controllers
const viaje_controllers = require('../controllers/dreamTripControllers');

// Definimos
const viajeRouter = express.Router();

//RUTA OBTENER VIAJES
viajeRouter.get('/mostrar-viaje',viaje_controllers.obtenerViaje);

//RUTA POSTEAR VIAJE
viajeRouter.post('/agregar-viaje', viaje_controllers.agregarViaje);

//RUTA ELIMINAR VIAJE

// REGISTRO USUARIO
viajeRouter.post('/registro', viaje_controllers.registroUsuario);

// Exportamos las rutas
module.exports = viajeRouter;