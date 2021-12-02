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
        let suma = (num1, num2) => num1 + num2;
        let num1 = parseInt(prompt("Escribe un número:"));
        let num2 = parseInt(prompt("Escribe otro número:"));
        let resultado = suma(num1, num2);
        alert(`Hey ${nombre}, el resultado de tu suma es: ${resultado}`);
        if (resultado < 50){
            alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado");
            while(resultado < 50) {
                resultado++;
                console.log(`Ciclo hasta el ${resultado}/50`);
            }
        } else {
            alert(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo en consola`);
        }
        let peticion = prompt("Quieres hacer otra operacion?");
        if(peticion === "Si" || peticion === "si" || peticion === "SI") {
            tipoDeCuenta;
        } else {
            alert(`Entiendo ${nombre} que no quieres realizar otra operacion. Hasta la proxima!`);
            break;
        }
    } else if (tipoDeCuenta === 2) {
        // Restar números
        alert("ATENCIÓN!\nEstas por hacer una resta.");
        let resta = (num1, num2) => num1 - num2;
        let num1 = parseInt(prompt("Escribe un número:"));
        let num2 = parseInt(prompt("Escribe otro número:"));
        let resultado = resta(num1, num2);
        alert(`Hey ${nombre}, el resultado de tu resta es: ${resultado}`);
        if (resultado < 50){
            alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado");
            while(resultado < 50) {
                resultado++;
                console.log(`Ciclo hasta el ${resultado}/50`);
            }
        } else {
            alert(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo en consola`);
        }
        let peticion = prompt("Quieres hacer otra operacion?");
        if(peticion === "Si" || peticion === "si" || peticion === "SI") {
            tipoDeCuenta;
        } else {
            alert(`Entiendo ${nombre} que no quieres realizar otra operacion. Hasta la proxima!`);
            break;
        }
    } else if (tipoDeCuenta === 3) {
        // Multiplicar números
        alert("ATENCIÓN!\nEstas por hacer una multiplicación.");
        let multiplicación = (num1, num2) => num1 * num2;
        let num1 = parseInt(prompt("Escribe un número:"));
        let num2 = parseInt(prompt("Escribe otro número:"));
        let resultado = multiplicación(num1, num2);
        alert(`Hey ${nombre}, el resultado de tu multiplicacion es: ${resultado}`);
        if (resultado < 50){
            alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado");
            for(resultado; resultado <= 50; resultado++) {
                console.log(`Ciclo hasta el ${resultado}/50`);
            }
        } else {
            alert(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo en consola`);
        }
        let peticion = prompt("Quieres hacer otra operacion?");
        if(peticion === "Si" || peticion === "si" || peticion === "SI") {
            tipoDeCuenta;
        } else {
            alert(`Entiendo ${nombre} que no quieres realizar otra operacion. Hasta la proxima!`);
            break;
        }
    } else if (tipoDeCuenta === 4) {
        // Division números
        alert("ATENCIÓN!\nEstas por hacer una división.");
        let division = (num1, num2) => num1 / num2;
        let num1 = parseInt(prompt("Escribe un número:"));
        let num2 = parseInt(prompt("Escribe otro número:"));
        let resultado = division(num1, num2);
        alert(`Hey ${nombre}, el resultado de tu division es: ${resultado}`);
        if (resultado < 50){
            alert("CICLO:\nRevisa la consola que hay una serie de\nnúmeros en base a tu resultado");
            for(resultado; resultado <= 50; resultado++) {
                console.log(`Ciclo hasta el ${resultado}/50`);
            }
        } else {
            alert(`Tu resultado es: ${resultado} y es superior a 50\nPor lo tanto, no se ejecuta el ciclo en consola`);
        }
        let peticion = prompt("Quieres hacer otra operacion?");
        if(peticion === "Si" || peticion === "si" || peticion === "SI") {
            tipoDeCuenta;
        } else {
            alert(`Entiendo ${nombre} que no quieres realizar otra operacion. Hasta la proxima!`);
            break;
        }
    } else {
        // Respuesta por 'Default'
        let reiniciar = function() {
            alert(`Disculpa ${nombre}, no conozco ese comando.\nApreta enter para que se ejecute de nuevo el programa!`);
            tipoDeCuenta;
        }
        reiniciar();
    }
}