// La clase que nos creara los objetos de cada Contacto.
// Que se enviaran y crearan en el archivo 'functions.js'
class Contacto {
    constructor(fullName, correo, mensaje){
        // El .toUpperCase() para que el nombre y apellido ingresado en el input este en Mayuscula
        this.nombre = fullName.toUpperCase();
        this.correo = correo;
        this.mensaje = mensaje;
    }
}