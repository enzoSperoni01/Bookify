function enviarContacto() {
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