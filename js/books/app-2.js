let tituloLibro;
let generoLibro;
let paginasLibro;

let listadoLibros = [];

function botonListo() {
    tituloLibro = document.getElementById("nombreLibro").value;
    generoLibro = document.getElementById("generoLibro").value;
    generoLibro = capitalize(generoLibro);
    paginasLibro = document.getElementById("paginasLibro").value;

    listadoLibros.push(new Libros(tituloLibro, generoLibro, paginasLibro));
    ordenarPaginas();
    imprimirLibros();
}