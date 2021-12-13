function capitalize(palabra) { 
    // Si el usuario pone una palabra en minuscula, la primera letra se pondra en mayuscula
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
        alert(`Perfecto ${nombre}, entra a tu consola para ver el listado de tus libros.\nNos vemos!`);
        nombreLibro = "ESC";
    } else {
        alert(`Perfecto ${nombre}, entra a tu consola para ver el listado de tus libros.\nNos vemos!`);
        nombreLibro = "ESC";
    }
}