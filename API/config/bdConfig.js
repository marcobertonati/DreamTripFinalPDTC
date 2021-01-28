// requerimos mysql
const mysql = require('mysql');

// definimos base de datos
const conexion_db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'dreamtrip', //base de datos
    port: 8889
});

// conectamos base de datos
conexion_db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('conexion a base de datos exitosa');
    }
})

// exportamos
module.exports = conexion_db;