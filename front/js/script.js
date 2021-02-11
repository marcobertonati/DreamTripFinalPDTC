console.log('Entró al index')

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

      <div class="divCard"><img class="iconoCard" src="./img/maleta.svg" 
            srcset="maleta.svg/></div><br>

            <div class="card-body" id="card">

            <div height="20px" style="background-image:url(./img/1.jpg"></div>
        

            <h5 class="card-title" id="destino">                
            ${element.destino_viaje}
          </h5>

          <p class="card-text" id="comentario">
            ${element.comentario_viaje}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="presupuesto">$               
            ${element.presupuesto_viaje}
          </li>
          <li class="list-group-item" id="fecha">                
            ${element.fecha_viaje}
          </li>
          <li class="list-group-item" id="contacto">                
            ${element.contacto_viaje}
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
function enviarDatos() {
  // e.preventDefault();
  console.log("Entro de la funcion enviar datos");
  let destino = document.querySelector("#destino-armar").value;
  let fecha = document.querySelector("#fecha").value;
  let presupuesto = document.querySelector("#presupuesto").value;
  let comentario = document.querySelector("#comentario").value;
  let contacto = document.querySelector("#contacto").value;
  axios.post("http://localhost:8080/admin/agregar-viaje", {
    destino_viaje: destino,
    fecha_viaje: fecha,
    presupuesto_viaje: presupuesto,
    comentario_viaje: comentario,
    contacto_viaje: contacto
  })
  .then ((data) => {
    console.log(data);
  });
  alert('¡Datos enviados')
}

document.querySelector('#formulario-viaje').addEventListener('submit', enviarDatos)

// Cerrar sesión
function cerrarSesion() {
  alert('Vas a Cerrar sesion');
  axios.get("http://localhost:8080/logout");
  window.location = "../pages/login.html";
}