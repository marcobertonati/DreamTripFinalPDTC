// RUTAS DE VIAJES
// Son las rutas DEL SERVIDOR. Definimos lo que vamos a solicitarle al servidor a través de rutas. Si vaa consultar una base de datos, que nos va a traer, etc.

// Requerimos Express
const express = require('express');

// Requerimos Controllers
const viaje_controllers = require('../controllers/dreamTripControllers');

// Autenticar
const isAuthenticated = function (req,res,next) {
    if (req.isAuthenticated())
    return next();
    //  res.send('/pages/misviajes.html');
     //Si no está autenticado va a la sección logín
    
}

// Definimos el Routeador
const viajeRouter = express.Router();

// RUTA OBTENER VIAJES
viajeRouter.get('/mostrar-viaje', viaje_controllers.obtenerViaje);

// RUTA POSTEAR VIAJE
viajeRouter.post('/agregar-viaje', viaje_controllers.agregarViaje);

// RUTA ELIMINAR VIAJE
viajeRouter.delete('/eliminar-viaje/:id_viaje', viaje_controllers.eliminarViaje);

// REGISTRO USUARIO
viajeRouter.post('/registro', viaje_controllers.registroUsuario);

// Exportamos las rutas
module.exports = viajeRouter;