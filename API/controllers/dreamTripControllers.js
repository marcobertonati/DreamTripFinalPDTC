// const { response } = require('express');
// const express = require('express');
// const app = express();

// const path = require('path');

//CONTROLADORES TABLA VIAJE

// requerimos base de datos
const conexion_db = require("../config/bdConfig");

// app.use(express.static(path.parse(__dirname).dir + '/front'));
// obtenemos viajes
const obtenerViaje = (req, res) => {
  // Envio de Front end - con esto logramos enviarle al usuario todo el front.
  conexion_db.query("SELECT * FROM t_viaje", (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
    // res.send('Datos importados de la base de datos');
  });
  // console.log(`${path.parse(__dirname).dir}/front`);
  // app.use(express.static(`/Users/constanzapoma/Desktop/ultimoDreamTrip/dreamTrip1/front`));
  
  // app.get('/', (req, res) => {
  //   res.sendFile(`/Users/constanzapoma/Desktop/ultimoDreamTrip/dreamTrip1/front`);
  //  })
  
  // res.sendFile(`/Users/constanzapoma/Desktop/ultimoDreamTrip/dreamTrip1/front`);
};


// agregar viaje
const agregarViaje = (req, res) => {
    console.log("se ejecutó primera parte");

  //destructuramos
  let {
    destino_viaje,
    fecha_viaje,
    presupuesto_viaje,
    comentario_viaje
  } = req.body;

  console.log(` /////////////
  Soy la linea 31: ${req.body}
  /////////////`)

  console.log("se ejecutó segunda parte")

  conexion_db.query(
    'INSERT INTO `t_viaje`(`destino_viaje`, `fecha_viaje`, `presupuesto_viaje`, `comentario_viaje`) VALUES (?,?,?,?)',
    [destino_viaje, fecha_viaje, presupuesto_viaje, comentario_viaje],
    
    (err, results) => {
    console.log("se ejecutó tercera parte")
      if (err) {
          console.log("ENTRO A UN ERROR")
          console.log(err)
      } else {
          console.log("ENTRO A UN BIEN")
          console.log(results);
      }
      console.log("Datos enviados")
    }
  );

  res.send('Datos enviados!')

};

// editar viajes


// eliminar viajes


// Registro Usuario

const registroUsuario = (req, res) => {
  console.log("se ejecutó primera parte");

//destructuramos
let {
  nombre_usuario,
  apellido_usuario,
  email_usuario,
  telefono_usuario,
  ciudad_usuario,
  pais_usuario,
  contraseña_usuario
} = req.body;

console.log(` /////////////
Soy la linea 31: ${req.body}
/////////////`)

console.log("se ejecutó segunda parte")

conexion_db.query(
  'INSERT INTO `t_usuario`(`nombre_usuario`, `apellido_usuario`, `email_usuario`, `telefono_usuario`, `ciudad_usuario`, `pais_usuario`, `contraseña_usuario`) VALUES (?,?,?,?,?,?,?)',
  [nombre_usuario, apellido_usuario, email_usuario, telefono_usuario, ciudad_usuario, pais_usuario, contraseña_usuario],
  
  (err, results) => {
  console.log("se ejecutó tercera parte")
    if (err) {
        console.log("ENTRO A UN ERROR")
        console.log(err)
    } else {
        console.log("ENTRO A UN BIEN")
        console.log(results);
    }
    console.log("Datos enviados")
  }
);
res.send('Datos enviados!')
};




module.exports = { obtenerViaje, agregarViaje, registroUsuario };
