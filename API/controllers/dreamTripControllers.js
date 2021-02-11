//CONTROLADORES TABLA VIAJE

// requerimos base de datos
const {conexion_db} = require("../config/bdConfig");

// app.use(express.static(path.parse(__dirname).dir + '/front'));

// Obtenemos viajes
const obtenerViaje = (req, res) => {
  // Envio de Front end - con esto logramos enviarle al usuario todo el front.
  conexion_db.query("SELECT * FROM t_viaje", (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
  });
};

// Agregar viaje
const agregarViaje = (req, res) => {
    console.log("se ejecutó primera parte");

  //destructuramos
  let {
    destino_viaje,
    fecha_viaje,
    presupuesto_viaje,
    comentario_viaje,
    contacto_viaje
  } = req.body;

  console.log("se ejecutó segunda parte")

  conexion_db.query(
    'INSERT INTO `t_viaje`(`destino_viaje`, `fecha_viaje`, `presupuesto_viaje`, `comentario_viaje`, `contacto_viaje`) VALUES (?,?,?,?,?)',
    [destino_viaje, fecha_viaje, presupuesto_viaje, comentario_viaje, contacto_viaje], (err, results) => {
    console.log("se ejecutó tercera parte")
      if (err) {
          console.log("ENTRO A UN ERROR")
          console.log(err)
      } else {
          console.log("ENTRO A UN BIEN")
          console.log(results);
      }
      console.log("Datos enviados a la base de datos")
    }
  );

  // res.send('Objeto')
};




// editar viajes

// Eliminar viajes
const eliminarViaje = (req, res) => {
  console.log('El usuario quiere elimar un viaje')
  //destructuring

  console.log(req.params);


  let {id_viaje} = req.params;
  // req.body; 
  console.log(`El id del viaje es ${id_viaje}`)
  conexion_db.query('DELETE FROM `t_viaje` WHERE id_viaje = ?', [id_viaje], (err, results) => {
      if (err)
          throw err;
      res.send('Viaje Eliminado');
  })

}

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
  password_usuario
} = req.body;

console.log(` /////////////
Soy la linea 31: ${req.body}
/////////////`)

console.log("se ejecutó segunda parte")

conexion_db.query( 'INSERT INTO `t_usuario`(`nombre_usuario`, `apellido_usuario`, `email_usuario`, `telefono_usuario`, `ciudad_usuario`, `pais_usuario`, `password_usuario`) VALUES (?,?,?,?,?,?,?)',
  [nombre_usuario, apellido_usuario, email_usuario, telefono_usuario, ciudad_usuario, pais_usuario, password_usuario],
  
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


module.exports = {obtenerViaje, agregarViaje, eliminarViaje, registroUsuario}
