let tituloLibro;
let generoLibro;
let paginasLibro;

// Array donde se almacenan los libros,
// escritos en los input de "index.html"
let listadoLibros = [];

const botonListo = () => {
    // Obtenemos el valor de cada input del "index.html"
    tituloLibro = $("#nombreLibro")[0].value;
    generoLibro = $("#generoLibro")[0].value;
    paginasLibro = $("#paginasLibro")[0].value;

    // Creamos una constante que contenga el objeto creado
    const nuevoLibro = new Libros(tituloLibro, generoLibro, paginasLibro);
    // Y enviamos al array el objeto creado
    listadoLibros.push(nuevoLibro);
    ordenarPaginas();
    imprimirLibros();
}