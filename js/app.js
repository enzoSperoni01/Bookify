let añadirLibro;
let genero;
let paginas;

let listadoLibros = [];

let nombre = prompt('JS: "Hola usuario, soy JavaScript!\nPor favor, dime ¿Cual es tu nombre?"');
nombre = capitalize(nombre);

if (localStorage.getItem("name") !== nombre) {
    alert(`JS: "Veo queres nuevo por aqui ${nombre}..."`);
    localStorage.setItem("name", nombre);
    let apellido = prompt(`JS: "Dime, ¿Cual es tu apellido?"`);
    apellido = capitalize(apellido);
    localStorage.setItem("lastname", apellido);
    alert(`JS: "Genial ${nombre} ${apellido}, comienza a anotar tus libros!"`);
} else {
    let nombreBD = localStorage.getItem("name");
    alert(`Bienvenido de vuelta ${nombreBD}!\nVe a seguir anotando tus libros favoritos...`);
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

function imprimirLibros(){
    let html = "";
    listadoLibros.forEach(function(book){            
        html += `<li>Titulo: ${book.libro},<br>Genero: ${book.genero},<br>Paginas: ${book.paginas}</li>`;
    });
    document.getElementById("biblioteca").innerHTML = html;
}

imprimirLibros();
console.log(listadoLibros);