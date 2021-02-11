// Botón registrarse
function enviar(pagina) {
    document.botonDeRegistro.action = pagina;
    document.botonDeRegistro.submit();

}

// Registro Usuario
function registroUsuario() {
    // console.log("entre a la funcion")
    // if (e.preventDefault()) {
    //    console.log("Pase el prevent"); 
    // };
    let nombre = document.querySelector("#nombre_usuario").value;
    let apellido = document.querySelector("#apellido_usuario").value;
    let email = document.querySelector("#email_usuario").value;
    let telefono = document.querySelector("#telefono_usuario").value;
    let ciudad = document.querySelector("#ciudad_usuario").value;
    let pais = document.querySelector("#pais_usuario").value;
    let contraseña = document.querySelector("#contrasenia_usuario").value;

    // console.log(`llego ${nombre}`);
    // console.log(typeof(nombre));

    // Mejorarlo!
    if (nombre === "" || apellido === "" || email === "" || telefono === "" || ciudad === "" || pais === "" || contraseña === "") {
        alert("Debes completar todos los campos");
    } else {
        axios.post("http://localhost:8080/admin/registro", {
            nombre_usuario: nombre,
            apellido_usuario: apellido,
            email_usuario: email,
            telefono_usuario: telefono,
            ciudad_usuario: ciudad,
            pais_usuario: pais,
            password_usuario: contraseña
        });
        alert("¡Registro finalizado!");
        window.location = "login.html";
    }
}

document.querySelector('#form-login').addEventListener('submit', ingresoUsuario)

// Ingreso Usuario
function ingresoUsuario (e) {
    e.preventDefault();

    let usuario = document.getElementById("login").value;
    let contrasenia = document.getElementById("password").value;
    // alert(`El usuario es ${usuario} y su contraseña es ${contrasenia}`)
    console.log(`El usuario es ${usuario} y su contraseña es ${contrasenia}`)


    axios.post("http://localhost:8080/login", {
        email_usuario: usuario,
        password_usuario: contrasenia
    })
    
    .then((response)=>{
        // alert(response);
        console.log(response.data.condicion)

        if (response.data.condicion === false) {

            alert('¡Usuario o contraseñaincorrecta!')
            window.location='login.html'

        } else {
            alert('¡Hola!')
            window.location='../index.html';
        }
    })
    .catch((error) => {
        // window.location='login.html'

    })

}

