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
function añadirOtro(decision) {
    decision = decision.toLowerCase();
    if(decision === "si") {
        nombreLibro;
    } else if(decision === "no") {
        alert(`Perfecto ${nombre}, encontraras tus libros aqui debajo.\nNos vemos!`);
        nombreLibro = "ESC";
    } else {
        alert(`Perfecto ${nombre}, encontraras tus libros aqui debajo.\nNos vemos!`);
        nombreLibro = "ESC";
    }
}
function imprimirLibros(){
    let html = "";
    listadoLibros.forEach(function(book){            
        html += `<li data-aos="fade-up" data-aos-duration="1000">
                    Titulo: ${book.libro},<br>
                    Genero: ${book.genero},<br>
                    Paginas: ${book.paginas}
                </li>`;
    });
    document.getElementById("biblioteca").innerHTML = html;
}