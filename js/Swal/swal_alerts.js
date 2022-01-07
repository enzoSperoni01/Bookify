function enviarModal() {
	let emailRecibido = {
		title: "Enviado!",
		text: "Tu email ha sido recibido con exito!",
		icon: "success",
		confirmButtonText: "Listo!",
	};

    let emailError = {
        title: 'Ha habido un error!',
        text: 'Debes llenar la casilla con tu correo',
        icon: 'warning'
    }

    let correo = $("#email-newsletter")[0].value;
    if(correo !== "") Swal.fire(emailRecibido);
    else Swal.fire(emailError);
}