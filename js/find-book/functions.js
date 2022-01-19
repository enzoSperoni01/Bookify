const recibirLibros = () => {
	$.get("../js/find-book/libros.json", (respuesta, estado) => {
		libros = respuesta.libros;
		imprimirLibros(libros);
	});
}

const imprimirLibros = array => {
	$("#container").empty();

    array.forEach( book => {
		let enCarrito = carrito.some(
			(prodEnCarrito) => prodEnCarrito.id === book.id
		);

		$("#container").append(
			$(`
            <div id="${book.id}" class="div-book">
				<img src="../assets/img-books/${book.img}.jpg" alt="${book.titulo}" />
				<div class="align-items">

					<h3 class="title-book">${book.titulo}</h3>

					<div class="writer-gender">
						<h3 class="writter-book">${book.autor}</h3>
						<p>${book.genero}</p>
					</div>

					<button id="${book.id}" class="btn-cart" ${ enCarrito ? "disabled" : null } onclick="agregarAlCarrito(event)">${ enCarrito ? "En carrito" : "Añadir al carrito" }</button>
				</div>
			</div>
            `)
		);
	});
}

const agregarAlCarrito = param => {
	param.target.textContent = "En Carrito";
	param.target.disabled = true;

	let id = Number(param.target.id);
	let libroSeleccionado = libros.find( p => p.id === id);

	carrito.push(libroSeleccionado);

	localStorage.setItem("carrito-cliente", JSON.stringify(carrito));

	imprimirCarrito(carrito);
}

const eliminarLibro = param => {
	let id = Number(param.target.id);
	let index = carrito.findIndex( p => p.id === id);

	carrito.splice(index, 1);

	imprimirCarrito(carrito);

	localStorage.setItem("carrito-cliente", JSON.stringify(carrito));

	imprimirLibros(libros);
}

const imprimirCarrito = array => {
	$("#carrito").empty();

	let total = 0;

	array.forEach( libro => {

		total = total + libro.precio;
		$("#carrito").append(`
        <tr>
            <td>${libro.titulo}</td>
            <td class="header-price">$${libro.precio}</td>
            <td><button id="${libro.id}" class="eliminar" onclick="eliminarLibro(event)">X</button></td>
        </tr>
        `);

	});

	$("#carrito").append(`<span class="total">Total: $${total.toFixed(2)}`);
	$("#carrito").append(`<button id="comprar-libros" class="comprarLibros">Comprar</button>`);

}

searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // El valor lo convertimos en minuscula
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of booksFromDOM) {
        // El titulo tambien en minuscula
        let title = nameElement.textContent.toLowerCase();

        if (title.includes(searchQuery)) {
            nameElement.style.display = "flex";
        } else {
            nameElement.style.display = "none";
        }
    }
});