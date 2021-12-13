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
        alert(`Entiendo ${nombre} que no quieres realizar otra operacion.\nHasta la proxima!`);
        tipoDeCuenta = "ESC";
    }
}
function personaUsuario(nombre, apellido) {
    const usuarioPersona = new Persona(nombre, apellido);
    usuarioPersona.hablarJS();
    usuarioPersona.hablarUsuario();
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