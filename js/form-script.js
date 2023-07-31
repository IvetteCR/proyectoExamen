function mialerta() {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellidos").value;
    let correo = document.getElementById("txtCorreo").value;
    let telefono = document.getElementById("txtTelefono").value;
    let msj = document.getElementById("txtMensaje").value;
    if (nombre == "" || correo == "" || apellido == "" || telefono == "" || msj == "" ) {
        alert("¡Debes llenar todos los campos!"); 
    } else {
        alert("¡Mensaje enviado exitosamente...!");
    }
  }