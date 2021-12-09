let platillo;
let acompañamiento;
let precio;

function preguntar() {
    let decision = prompt("Quieres añadir otro platillo?");
    decision = decision.toLowerCase();
    if(decision == "si") {
        platos();
    } else {
        alert("Muy bien, revisa la consola y tendras agendado tus platos.\nNos vemos!");
    }
}

function platos(){
    let platillo = prompt("Que plato quieres añadir al menu?");
    let acompañamiento = prompt("Ahora, ¿con que lo quieres acompañar?");
    let precio = prompt("Dime, ¿Que precio le pondrias a todo?");
    let plato = new Menu(platillo, acompañamiento, precio);
    console.log(plato);
    preguntar();
}

class Menu {
    constructor(comida, acompañamiento, precio) {
        this.comida = comida;
        this.acompañamiento = acompañamiento;
        this.precio = precio;
    }
}

platos(platillo, acompañamiento, precio);