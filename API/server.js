//PROYECTO FINAL DREAM TRIP
//requerimos express
const express = require('express');
const path = require('path');

// ejecutamos el servidor
const app = express();

// requerimos cors
const cors = require('cors');
// middleware que ejecuta cors
app.use(cors());

// middleware que permite lectura de datos del lado del cliente:
// permite que mi app acepte json del lado del cliente
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Requerimos la configuración de passport
const { passport } = require('./config/passportConfig');

app.use(passport.initialize());
app.use(passport.session()); //passport con sesiones
//Login passport
app.post('/login', (req, res, next) => {
    passport.authenticate('local.login', (err, user, info) => {
        console.log('Entró en autenticar')

        if (err) { return next(err) }
        console.log('Paso Next')

        if (!user) { return res.send(info) }
        console.log('Paso 2 Next')

        req.login(user, function(err) {
            if (err) { return next(err); }
            console.log('Paso 3 Next')
            return res.send('Te has logueado');
        });
    })(req, res, next)
})



// Requerimos rutas de API
const viajeRouter = require('./routes/viajes');
app.use('/admin', viajeRouter);


// Envio de Front end - con esto logramos enviarle al usuario todo el front.
app.use(express.static(path.parse(__dirname).dir + '/front'));

// chequeamos que nos esté escuchando
app.listen(8080, () => {
    console.log('escuchando en el puerto 8080');
});