let añadirLibro;
let genero;
let paginas;
class Libros {
    constructor(libro, genero, paginas) {
        this.libro = libro.toUpperCase();
        this.genero = capitalize(genero);
        this.paginas = parseInt(paginas);
    }
}

let listadoLibros = [];

let nombre = prompt('JS: "Hola usuario, soy JavaScript! ¿Cual es tu nombre?"');
nombre = capitalize(nombre);
let apellido = prompt(`JS: "Bien ${nombre}, ahora dime, ¿Cual es tu apellido?"`);
apellido = capitalize(apellido);
alert(`JS: "Muy bien ${nombre} ${apellido}, comienza a anotar tus libros!"`);

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