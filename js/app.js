// Pedir nombre
let nombre = prompt("Hola usuario, soy JavaScript! ¿Cual es tu nombre?");
let apellido = prompt("Ahora dime, ¿Cual es tu apellido?");
alert(`Muy bien ${nombre} ${apellido}, ahora haremos una cuenta!`);

let tipoDeCuenta = prompt(`Que tipo de cuenta deseas realizar ${nombre}?\n1: Suma, 2: Resta, 3: Multiplicación, 4:Division`);
tipoDeCuenta = parseInt(tipoDeCuenta);

if (tipoDeCuenta === 1) {
    // Sumar números
    alert("ATENCIÓN!\nEstas por hacer una suma.")
    let num1 = parseInt(prompt("Escribe un número:"));
    let num2 = parseInt(prompt("Escribe otro número:"));
    let resultado = parseInt(num1 + num2);
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado")
    if (resultado < 50){
        while(resultado < 50) {
            resultado++;
            console.log(`Ciclo hasta el ${resultado}/50`);
        }
    } else {
        console.log(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo`);
    }
} else if (tipoDeCuenta === 2) {
    // Restar números
    alert("ATENCIÓN!\nEstas por hacer una resta.")
    let num1 = parseInt(prompt("Escribe un número:"));
    let num2 = parseInt(prompt("Escribe otro número:"));
    let resultado = parseInt(num1 - num2);
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado")
    if (resultado < 50){
        while(resultado < 50) {
            resultado++;
            console.log(`Ciclo hasta el ${resultado}/50`);
        }
    } else {
        console.log(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo`);
    }
} else if (tipoDeCuenta === 3) {
    // Multiplicar números
    alert("ATENCIÓN!\nEstas por hacer una multiplicación.")
    let num1 = parseInt(prompt("Escribe un número:"));
    let num2 = parseInt(prompt("Escribe otro número:"));
    let resultado = parseInt(num1 * num2);
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado")
    if (resultado < 50){
        for(resultado; resultado <= 50; resultado++) {
            console.log(`Ciclo hasta el ${resultado}/50`);
        }
    } else {
        console.log(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo`);
    }
} else if (tipoDeCuenta === 4) {
    // Division números
    alert("ATENCIÓN!\nEstas por hacer una división.")
    let num1 = parseInt(prompt("Escribe un número:"));
    let num2 = parseInt(prompt("Escribe otro número:"));
    let resultado = parseInt(num1 / num2);
    alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
    alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado")
    if (resultado < 50){
        for(resultado; resultado <= 50; resultado++) {
            console.log(`Ciclo hasta el ${resultado}/50`);
        }
    } else {
        console.log(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo`);
    }
} else {
    // Respuesta por 'Default'
    alert(`Disculpa ${nombre}, no conozco ese comando.\nReinicia el programa y sigue mis instrucciones del principio`);
}
