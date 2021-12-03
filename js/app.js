/* Declarando funciones */
let num1;
let num2;
let peticion;
function reiniciar() {
    alert(`Disculpa ${nombre}, no conozco ese comando.\nApreta enter para que se ejecute de nuevo el programa!`);
    tipoDeCuenta;
}
function pregunta(){
    peticion = prompt("Quieres hacer otra operacion?");
    peticion = peticion.toLowerCase();
    if(peticion === "si") {
        tipoDeCuenta;
    } else {
        alert(`Entiendo ${nombre} que no quieres realizar otra operacion. Hasta la proxima!`);
        tipoDeCuenta = "ESC";
    }
}
let ciclo = function(resultado, cuenta) {
    if (resultado < 50){
        alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado");
        while(resultado < 50) {
            resultado++;
            console.log(`${cuenta}: ciclo hasta el ${resultado}/50`);
        }
    } else {
        alert(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo en consola`);
    }
}
function pedirNumero1(){
    num1 = parseInt(prompt("Escribe un número:"));
    return num1;
}
function pedirNumero2(){
    num2 = parseInt(prompt("Escribe otro número:"));
    return num2;
}
function suma(num1, num2) {
    let resultado = num1 + num2;
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    ciclo(resultado, "Suma");
}
function resta(num1, num2) {
    let resultado = num1 - num2;
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    ciclo(resultado, "Resta");
}
function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    ciclo(resultado, "Multiplicación");
}
function division(num1, num2) {
    let resultado = num1 / num2;
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    ciclo(resultado, "División");
}

// Pedir nombre
const nombre = prompt("Hola usuario, soy JavaScript! ¿Cual es tu nombre?");
const apellido = prompt("Ahora dime, ¿Cual es tu apellido?");
alert(`Muy bien ${nombre} ${apellido}, ahora haremos una cuenta!`);

let tipoDeCuenta;

while(tipoDeCuenta !== "ESC"){
    let tipoDeCuenta = prompt(`Que tipo de cuenta deseas realizar ${nombre}?\n1: Suma, 2: Resta, 3: Multiplicación, 4:Division`);
    tipoDeCuenta = parseInt(tipoDeCuenta);
    if (tipoDeCuenta === 1) {
        // Sumar números
        alert("ATENCIÓN!\nEstas por hacer una suma.");
        pedirNumero1();
        pedirNumero2();
        suma(num1, num2);
        pregunta();
    } else if (tipoDeCuenta === 2) {
        // Restar números
        alert("ATENCIÓN!\nEstas por hacer una resta.");
        pedirNumero1();
        pedirNumero2();
        resta(num1, num2);
        pregunta();
    } else if (tipoDeCuenta === 3) {
        // Multiplicar números
        alert("ATENCIÓN!\nEstas por hacer una multiplicación.");
        pedirNumero1();
        pedirNumero2();
        multiplicacion(num1, num2);
        pregunta();
    } else if (tipoDeCuenta === 4) {
        // Division números
        alert("ATENCIÓN!\nEstas por hacer una división.");
        pedirNumero1();
        pedirNumero2();
        division(num1, num2);
        pregunta();
    } else {
        // Respuesta por 'Default'
        reiniciar();
    }
}