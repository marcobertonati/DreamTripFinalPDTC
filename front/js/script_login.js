// Registro Usuario

function registroUsuario(e) {
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
    let contraseña = document.querySelector("#contraseña_usuario").value;
    
    // console.log(`llego ${nombre}`);
    // console.log(typeof(nombre));

// Mejorarlo!
    if (nombre === "" || apellido === "" || email=== "" || telefono === "" || ciudad==="" || pais==="" || contraseña==="") {
        alert("Debes completar todos los campos");
    } else {
        axios.post("http://localhost:8080/admin/registro", {
        nombre_usuario : nombre,
        apellido_usuario : apellido,
        email_usuario : email,
        telefono_usuario : telefono,
        ciudad_usuario : ciudad,
        pais_usuario : pais,
        contraseña_usuario : contraseña
    });
    alert("datos enviados");
    window.location = "login.html";
    } 
}

