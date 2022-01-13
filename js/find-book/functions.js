function cargarLibros() {
	const container = $("#container");

	// por cada producto (for each) uso el append para meterle todo el bloque de html dinámico
	// es realmente horrible, no lo hagan de esta forma 😂
	listaDeLibros.forEach((prod) => {
		container.append(
			`<div id="${prod.id}">
                <img src="../assets/img-books/${prod.slug}.jpg" alt="${prod.titulo}" />
            </div>`
		);
	});
}