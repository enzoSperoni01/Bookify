/* Declarando funciones */
let num1;
let num2;
let peticion;
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    hablarJS() {
        alert(`JS: "Muy bien ${this.nombre} ${this.apellido}, ahora haremos una cuenta!"`);
    }
    hablarUsuario() {
        alert(`${this.nombre}: "Genial, hagamoslo!"`);
    }
}

const nombre = prompt('JS: "Hola usuario, soy JavaScript! ¿Cual es tu nombre?"');
const apellido = prompt(`JS: "Bien ${nombre}, ahora dime, ¿Cual es tu apellido?"`);
personaUsuario(nombre, apellido);

let tipoDeCuenta;

while(tipoDeCuenta !== "ESC"){
    let tipoDeCuenta = parseInt(
        prompt(`Que tipo de cuenta deseas realizar ${nombre}?\n1: Suma, 2: Resta, 3: Multiplicación, 4:Division`)
    );
    switch(tipoDeCuenta) {
        case 1:
            alert("ATENCIÓN!\nEstas por hacer una suma.");
            pedirNumero1();
            pedirNumero2();
            suma(num1, num2);
            pregunta();
            break;
        case 2:
            alert("ATENCIÓN!\nEstas por hacer una resta.");
            pedirNumero1();
            pedirNumero2();
            resta(num1, num2);
            pregunta();
            break;
        case 3:
            alert("ATENCIÓN!\nEstas por hacer una multiplicación.");
            pedirNumero1();
            pedirNumero2();
            multiplicacion(num1, num2);
            pregunta();
            break;
        case 4:
            alert("ATENCIÓN!\nEstas por hacer una división.");
            pedirNumero1();
            pedirNumero2();
            division(num1, num2);
            pregunta();
            break;
        default:
            reiniciar();
            break;
    }
}