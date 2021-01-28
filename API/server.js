//PROYECTO FINAL DREAM TRIP
//requerimos express
const express = require('express');
const path = require('path');
// console.log(path.parse(__dirname).dir + '/front');
// ejecutamos el servidor
const app = express();

// requerimos cors
const cors = require('cors');
// middleware que ejecuta cors
app.use(cors());

// middleware que permite lectura de datos:
// permite que mi app acepte json del lado del cliente
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// requerimos rutas
const viajeRouter = require('./routes/viajes');
app.use('/admin', viajeRouter);
// Envio de Front end - con esto logramos enviarle al usuario todo el front.
app.use(express.static(path.parse(__dirname).dir + '/front'));




// chequeamos que nos esté escuchando
app.listen(8080,()=>{
    console.log('escuchando en el puerto 8080');
});