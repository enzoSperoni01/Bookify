function cargarLibros() {
	const container = $("#container");

	listaDeLibros.forEach((prod) => {
		container.append(
			`<div id="${prod.id}">
                <img src="../assets/img-books/${prod.slug}.jpg" alt="${prod.titulo}" />
            </div>`
		);
	});
}