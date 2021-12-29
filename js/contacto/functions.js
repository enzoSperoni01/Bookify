// Funcion que se encarga de trabajar los datos ingresados en los inputs 
function enviarContacto() {
    // Tomamos los datos de los Inputs y del textarea
    nombreApellido = document.getElementById("nombreApellido").value;
    correoElectronico = document.getElementById("correoElectronico").value;
    mensaje = document.getElementById("comentarios").value;

    // Creamos un objeto con la clase "Contacto", y le pasamos los valores de los inputs
    contactoDeUsuario = new Contacto(nombreApellido, correoElectronico, mensaje);

    // Almacenamos en el localStorage la variable contactoDeUsuario
    // Con la key 'datos-*correoElectronico*', Esto para que cada key sea unico segun el correo ingresado
    // Y el objeto contactoDeUsuario lo pasamos a un JSON pero en string 
    localStorage.setItem(`datos-${correoElectronico}`, JSON.stringify(contactoDeUsuario));

    let boton = document.getElementById("button-contact");

    // Con esta funcion podemos realizar acciones en un tiempo determinado
    setTimeout(() => {
        boton.value = "Enviando...";
        setTimeout(() => {
            boton.value = "Enviado!";
            setTimeout(() => {

                // Con este metodo podemos dirigir al usuario, como un link de HTML(<a href=""></a>), pero en JS
                window.location.href = "../pages/contactoHecho.html";
            }, 1700);
        }, 2500);
    }, 500);
}