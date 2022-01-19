// Funcion que se encarga de trabajar los datos ingresados en los inputs 
const enviarContacto = () => {
    // Tomamos los datos de los Inputs y del textarea
    nombreApellido = $("#nombreApellido")[0].value;
    correoElectronico = $("#correoElectronico")[0].value;
    mensaje = $("#comentarios")[0].value;
    
    if(nombreApellido && correoElectronico && mensaje !== "") {
        // Creamos un objeto con la clase "Contacto", y le pasamos los valores de los inputs
        contactoDeUsuario = new Contacto(nombreApellido, correoElectronico, mensaje);
    
        /* Almacenamos en el localStorage la variable contactoDeUsuario
         * Con la key 'datos-*correoElectronico*', Esto para que cada key sea unico segun el correo        ingresado
         * Y el objeto contactoDeUsuario lo pasamos a un JSON pero en string 
        */ 

        localStorage.setItem(`datos-${correoElectronico}`, JSON.stringify(contactoDeUsuario));
        let boton = $("#button-contact")[0];

        // Con esta funcion podemos realizar acciones en un tiempo determinado
        setTimeout(() => {
            $("#button-contact").hide();
            $(".spinner").show();
            setTimeout(() => {
                $(".spinner").hide();
                $("#button-contact").show()
                                    .css({ "background-color": "green" })
                boton.value = "Enviado!";
                setTimeout(() => {
                    // Con este metodo podemos dirigir al usuario, como un link de HTML(<a href=""></a>), pero en JS
                    window.location.href = "../pages/contactDone.html";
                }, 2600);
            }, 3000);
        }, 500);
    } else {
        $("#button-contact").click(() => {
            $(".p-alert").fadeIn();
            setTimeout(() => {
                $(".p-alert").fadeOut();
            }, 3000);
        })
    }
}