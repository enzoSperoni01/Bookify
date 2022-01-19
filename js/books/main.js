let tituloLibro;
let generoLibro;
let paginasLibro;

// Array donde se almacenan los libros,
// escritos en los input de "index.html"
let listadoLibros = [];

const botonListo = () => {
    tituloLibro = $("#nombreLibro")[0].value;
    generoLibro = $("#generoLibro")[0].value;
    paginasLibro = $("#paginasLibro")[0].value;

    // Creamos una constante que contenga el objeto creado
    const nuevoLibro = new Libros(tituloLibro, generoLibro, paginasLibro);

    listadoLibros.push(nuevoLibro);
    ordenarPaginas();
    imprimirLibros();
}