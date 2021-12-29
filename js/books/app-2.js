let tituloLibro;
let generoLibro;
let paginasLibro;

let listadoLibros = [];

function botonListo() {
    tituloLibro = document.getElementById("nombreLibro").value;
    generoLibro = document.getElementById("generoLibro").value;
    generoLibro = capitalize(generoLibro);
    paginasLibro = document.getElementById("paginasLibro").value;

    const nuevoLibro = new Libros(tituloLibro, generoLibro, paginasLibro);
    listadoLibros.push(nuevoLibro);
    ordenarPaginas();
    imprimirLibros();
}