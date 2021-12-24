function enviarContacto() {
    nombreApellido = document.getElementById("nombreApellido").value;
    correoElectronico = document.getElementById("correoElectronico").value;
    mensaje = document.getElementById("comentarios").value;
    let contactoDeUsuario = new Contacto(nombreApellido, correoElectronico, mensaje);
    localStorage.setItem('datos', JSON.stringify(contactoDeUsuario));

    let boton = document.getElementById("button-contact");
    setTimeout(() => {
        boton.value = "Enviando...";
        setTimeout(() => {
            boton.value = "Enviado!";
            setTimeout(() => {
                window.location.href = "../pages/contactoHecho.html";
            }, 1700);
        }, 2500);
    }, 500);
}