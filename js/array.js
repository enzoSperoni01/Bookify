class Libros {
    constructor(libro, genero, paginas) {
        this.libro = libro.toUpperCase();
        this.genero = capitalize(genero);
        this.paginas = parseInt(paginas);
    }
}

let añadirLibro;
let genero;
let paginas;

let listadoLibros = [];

function capitalize(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
}
function ordenarPaginas() {
    listadoLibros.sort(function (a, b) { // Ordena los elementos del objeto de menor a payor segun su cantidad de paginas
        if (a.paginas > b.paginas) {
            return 1;
        }
        if (a.paginas < b.paginas) {
            return -1;
        }
    
        return 0;
    });
}
function nombreDelLibro(libro) {
    alert(`El libro añadido es: ${libro}`);
}
function generoLibro(genero) {
    alert(`El genero añadido para es: ${genero}`);
}
function cantPaginas(paginas) {
    alert(`Cantidad de paginas: ${paginas}`);
}
function añadirOtro(decision) {
    decision = decision.toLowerCase();
    if(decision === "si") {
        nombreLibro;
    } else if(decision === "no") {
        alert("Perfecto, entra a tu consola para ver el listado de tus libros.\nNos vemos!");
        nombreLibro = "ESC";
    } else {
        alert("Perfecto, entra a tu consola para ver el listado de tus libros.\nNos vemos!");
        nombreLibro = "ESC";
    }
}


let nombreLibro;

while(nombreLibro !== "ESC") {
    let añadirLibro = prompt("Escribe el nombre del libro:");
    nombreDelLibro(añadirLibro);
    let genero = prompt("Cual es el genero del libro?");
    generoLibro(genero);
    let paginas = parseInt(prompt("Cuantas paginas contiene?"));
    cantPaginas(paginas);
    listadoLibros.push(new Libros(añadirLibro, genero, paginas));
    ordenarPaginas();
    let reiniciar = prompt("Quieres añadir otro libro?");
    añadirOtro(reiniciar);
}

console.log(listadoLibros);