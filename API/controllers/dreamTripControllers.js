//CONTROLADORES TABLA VIAJE

// requerimos base de datos
const conexion_db = require("../config/bdConfig");

// obtenemos viajes
const obtenerViaje = (req, res) => {
  conexion_db.query("SELECT * FROM t_viaje", (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
    // res.send('Datos importados de la base de datos');
  });
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



module.exports = { obtenerViaje, agregarViaje };
