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
function imprimirLibros() {
    let html = "";
    let i = 0;
    listadoLibros.forEach(function(book) {
        html += `<li id="libro-${i}" class="section__div__list__item" data-aos="fade-up" data-aos-duration="600">
                    Titulo: ${book.libro},<br>
                    Genero: ${book.genero},<br>
                    Paginas: ${book.paginas}<br>
                    <button id="boton-borrar" class="section__div__list__item__btn" onclick="eliminarLibro(${i})">Eliminar</button>
                </li>`;
        i++;
    });
    document.getElementById("biblioteca").innerHTML = html;
}
function eliminarLibro(num) {
    let libroBorrar = document.getElementById(`libro-${num}`);
    libroBorrar.remove();
    listadoLibros.splice(num, 1);
}