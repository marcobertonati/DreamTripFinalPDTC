// Función Armar viaje
// let formulario_viaje = document.querySelector('#formulario-viaje');
function enviarDatos(){
    // e.preventDefault();
    console.log("Entro de la funcion enviar datos")
    let destino = document.querySelector('#destino').value;
    let fecha = document.querySelector('#fecha').value;
    let presupuesto = document.querySelector('#presupuesto').value;
    let comentario = document.querySelector('#comentario').value;
    axios.post('http://localhost:8080/admin/agregar-viaje',{
        destino_viaje : destino,
        fecha_viaje : fecha,
        presupuesto_viaje : presupuesto,
        comentario_viaje : comentario    
    })
    alert('datos enviados');
    window.location = 'armarviaje.html';
}
// formulario_viaje.addEventListener('submit',enviarDatos);