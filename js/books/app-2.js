let tituloLibro;
let generoLibro;
let paginasLibro;

// Array donde se almacenan los libros,
// escritos en los input de "index.html"
let listadoLibros = [];

function botonListo() {
    // Obtenemos el valor de cada input del "index.html"
    tituloLibro = document.getElementById("nombreLibro").value;
    generoLibro = document.getElementById("generoLibro").value;
    paginasLibro = document.getElementById("paginasLibro").value;

    // Creamos una constante que contenga el objeto creado
    const nuevoLibro = new Libros(tituloLibro, generoLibro, paginasLibro);
    // Y enviamos al array el objeto creado
    listadoLibros.push(nuevoLibro);
    ordenarPaginas();
    imprimirLibros();
}