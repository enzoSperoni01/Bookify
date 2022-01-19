// Esta funcion esta directamente anidada en el <body> del archivo 'contactoHecho.html'
function redirigirContacto() {
    setTimeout(() => {
        // Una vez pasan los 5000 (5000 == 5s), devuelve al usuario al archivo 'contacto.html'
        window.location.href = "../pages/contact.html";
    }, 5000);
}