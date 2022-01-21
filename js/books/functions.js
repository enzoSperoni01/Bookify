// Si el usuario pone una palabra en minuscula, la primera letra se pondra en mayuscula
const capitalize = palabra => { 
    return palabra[0].toUpperCase() + palabra.slice(1);
}

// Ordena los elementos del objeto de menor a payor segun su cantidad de paginas
const ordenarPaginas = () => {
    listadoLibros.sort(function (a, b) {
        if (a.paginas > b.paginas) {
            return 1;
        }
        if (a.paginas < b.paginas) {
            return -1;
        }
    
        return 0;
    });
}

// Esta funcion imprimira los libros escritos por el Usuario
const imprimirLibros = () => {
    let html = "";

    // La variable "i" se encargara de crear IDs distintos por cada <li>
    // Para que cada <li> sea unico y podamos operar con cada uno
    let i = 0;
    listadoLibros.forEach( book => {
        html += `<li id="libro-${i}" class="section__div__list__item" data-aos="fade-up" data-aos-duration="600">
                    Titulo: ${book.libro},<br>
                    Genero: ${book.genero},<br>
                    Paginas: ${book.paginas}<br>
                    <button id="boton-borrar" class="section__div__list__item__btn" onclick="eliminarLibro(${i})">Eliminar</button>
                </li>`;
        i++;
    });
    $("#biblioteca")[0].innerHTML = html;
}

/******************************************************
Toma el id de cada <li> y con un parametro lo selecciona
en el atributo onclick y agrega un boton con la funcionalidad
de eliminar el ID que el usuario elija
********************************************************/
const eliminarLibro = num => {
    let libroBorrar = $(`#libro-${num}`);
    libroBorrar.remove();
    listadoLibros.splice(num, 1);
    imprimirLibros();
}