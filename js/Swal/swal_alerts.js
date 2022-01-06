function enviarModal() {
	let mensaje = {
		title: "Enviado!",
		text: `Tu email ha sido recibido con exito!`,
		icon: "success",
		confirmButtonText: "Listo!",
	};

	Swal.fire(mensaje);
}