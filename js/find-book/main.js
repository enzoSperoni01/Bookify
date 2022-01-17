$(() => {
	recibirLibros();
	imprimirLibros(carrito);
});

let carrito = JSON.parse(localStorage.getItem("carrito-cliente")) || [];
let libros;