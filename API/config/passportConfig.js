// Requerimos passport
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { conexion_db } = require('./bdConfig');


//CONFIGURACIONES DE PASSPORT JS (MODULAR DESDE ACÁ HASTA DESERIALIZACIÓN)

//Controlador de Logueo, chequea el login
passport.use('local.login', new localStrategy({
    usernameField: 'email_usuario',
    passwordField: 'password_usuario',
    passReqToCallback: true
}, (req, email_usuario, password_usuario, done) => {
    conexion_db.query('SELECT * FROM t_usuario WHERE email_usuario = ?', [email_usuario], 
    (err, results) => {
        
        // console.log(results[0].email_usuario)
        console.log(results.length);

        if (results.length > 0) {

            console.log(results[0].email_usuario)
            //(results[0].email_usuario === email_usuario
            if (results[0].email_usuario === email_usuario) {

                console.log('Encontré un usuario')
                
                if (results[0].password_usuario === password_usuario) {
                    return done(null, results[0]);
                } else {
                    done(null, false, { mensaje: 'Usuario o Contraseña incorrecta' });
                }
            } else {
                return done(null, false, { mensaje: 'Usuario no existe' });
            }
        }
    })
}))

//Controlador de registro
// passport.use('local.registro', new localStrategy({
//     usernameField: 'email_usuario',
//     passwordField: 'password_usuario',
//     passReqToCallback: true
// }, (req, email_usuario, password_usuario, done) => {
//     // console.log(req.body);
//     let newUser = {
//         email_usuario,
//         password_usuario
//     }
//     conexion_db.query('INSERT INTO users SET ?', newUser, (err, results) => {
//         if (err) throw err;
//         newUser.id = results.insertId;
//         done(null, newUser);
//         console.log(results);
//     })
// }))

// Serialización hay que modular
passport.serializeUser((user, done) => {
    console.log('ESTE USUARIO ES EL QUE ENCONTRE');
    console.log(user);
    done(null, user.email_usuario);
});

// Deserealización
passport.deserializeUser((user, done) => {
    conexion_db.query('SELECT * FROM t_usuario WHERE id=?', [user.email_usuario], (err, results) => {
        done(err, results[0]);
    })
})

module.exports = {passport};