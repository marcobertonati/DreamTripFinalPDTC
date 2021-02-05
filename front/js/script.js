// Función MOSTRAR viaje
function mostrarViajes() {
  console.log("PEDIDO DE BASE DE DATOS");

  let cardViaje = document.getElementById("cards-trip");

  axios.get("http://localhost:8080/admin/mostrar-viaje").then((response) => {
    console.log("PEDIDO DE BASE DE DATOS");
    console.log(response.data);

    /* Creamos las CARDS */
    response.data.forEach((element) => {
      cardViaje.innerHTML += `<div class="card" style="width: 18rem" id="contender-tarjeta">

            <div class="card-body" id="card">
            
            <h5 class="card-title" id="destino">                
            ${element.destino_viaje}
          </h5>

          <p class="card-text" id="comentario">
            ${element.comentario_viaje}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="presupuesto">               
            ${element.presupuesto_viaje}
          </li>
          <li class="list-group-item" id="fecha">                
            ${element.fecha_viaje}
          </li>
          <li class="list-group-item" id="ubicacion">                
            <!-- ACA VA TEXTO -->
          </li>
        </ul>

        <div class="card-body">
          <a href="#" class="card-link" id="usuario">                
            <!-- ACA VA TEXTO -->
          </a>
        </div>
        </div>
        </div class="card" style="width: 18rem;">`;
    });
  });
}

mostrarViajes();

// Función ARMAR viaje
// let formulario_viaje = document.querySelector('#formulario-viaje');
function enviarDatos() {
  // e.preventDefault();
  console.log("Entro de la funcion enviar datos");
  let destino = document.querySelector("#destino").value;
  let fecha = document.querySelector("#fecha").value;
  let presupuesto = document.querySelector("#presupuesto").value;
  let comentario = document.querySelector("#comentario").value;
  axios.post("http://localhost:8080/admin/agregar-viaje", {
    destino_viaje: destino,
    fecha_viaje: fecha,
    presupuesto_viaje: presupuesto,
    comentario_viaje: comentario,
  });
  alert("datos enviados");
  window.location = "armarviaje.html";
}

// Mostrar viajes para eliminar
function verEliminarViajes() {
  console.log("PEDIDO DE BASE DE DATOS");

  let cardViaje = document.getElementById("cards-trip");

  axios.get("http://localhost:8080/admin/mostrar-viaje").then((response) => {
    console.log("PEDIDO DE BASE DE DATOS");
    console.log(response.data);

    /* Creamos las CARDS */
    response.data.forEach((element) => {
      cardViaje.innerHTML += `<div class="card" style="width: 18rem" id="contender-tarjeta">

            <div class="card-body" id="card">
            
            <h5 class="card-title" id="destino">                
            ${element.destino_viaje}
          </h5>

          <p class="card-text" id="comentario">
            ${element.comentario_viaje}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="presupuesto">               
            ${element.presupuesto_viaje}
          </li>
          <li class="list-group-item" id="fecha">                
            ${element.fecha_viaje}
          </li>
          <li class="list-group-item" id="ubicacion">                
            <!-- ACA VA TEXTO -->
          </li>
          <li class="list-group-item" id="btn">                
            <button class="botones-eliminar" id="${element.id_viaje}" onclick="elimarViaje(${element.id_viaje})"> Eliminar viaje</button>
          </li>
        </ul>

        <div class="card-body">
          <a href="#" class="card-link" id="usuario">                
            <!-- ACA VA TEXTO -->
          </a>
        </div>
        </div>
        </div class="card" style="width: 18rem;">`;
    });
  });
}

// Eliminar viaje
function elimarViaje(viajeEliminado) {

  let botonesEliminar = document.querySelectorAll('.botones-eliminar');
  // console.log(botonesEliminar);

  let botonesArray = Array.from(botonesEliminar);
  console.log(botonesArray);

  console.log(botonesArray[2].attributes[1].nodeValue);

  let viajeAEliminar = botonesArray[2].attributes[1].nodeValue;
  
  axios.delete(`http://localhost:8080/admin/eliminar-viaje/?id_viaje=${viajeAEliminar}`)
}


function cerrarSesion() {
  alert('vas a Cerrar sesion');

  axios.get("http://localhost:8080/logout", {
  })
  alert('Cerraste sesion');

}