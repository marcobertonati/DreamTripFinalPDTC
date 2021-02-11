// SCRIPT BUSCAR VIAJE

function buscarViaje(event) {
    event.preventDefault()
    const lugarViaje = document.getElementById('buscar_destino').value;
    
    axios.get(`http://localhost:8080/admin/mostrar-viaje`)
    .then((response) => {    
        const cardViaje = document.getElementById("cards-trip");

        response.data.forEach(element => {
            if (element.destino_viaje === lugarViaje) {

                cardViaje.innerHTML += `<div class="card" style="width: 18rem" id="contender-tarjeta">

                <div class="divCard"><img class="iconoCard" src="../img/maleta.svg" 
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
          <li class="list-group-item" id="presupuesto">               
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
            }
        });

        let campoNuevoBoton = document.querySelector('.botonBuscarViaje');

        let botonNuevo = document.createElement('button');

        botonNuevo.innerHTML= "Nueva Búsqueda"
        botonNuevo.classList= "btn btn-primary"
        botonNuevo.style.marginLeft = "1rem"
        campoNuevoBoton.appendChild(botonNuevo);
        botonNuevo.setAttribute('id', 'nueva-busqueda')
        botonNuevo.setAttribute('onlick', 'recargarPagina()');

        let btn_buscar = document.getElementById('btn-buscar');
        campoNuevoBoton.removeChild(btn_buscar);


    })
    .catch ((err) => {
        alert(err); 
    })


}

function recargarPagina() {

    alert('Hola!')
     
}


// Cerrar sesión
function cerrarSesion() {
  alert('Vas a Cerrar sesion');
  axios.get("http://localhost:8080/logout");
  window.location = "../pages/login.html";
}