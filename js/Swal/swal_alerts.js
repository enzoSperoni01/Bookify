function enviarModal() {
	let emailRecibido = {
		title: "Enviado!",
		text: "Tu email ha sido recibido con exito!",
		icon: "success",
		confirmButtonText: "Listo!",
	};

    let emailError = {
        title: '<h3 style="color: white;">Ha habido un error!</h3>',
        html: '<b style="color: white;">Debes llenar la casilla con tu correo</b>',
        icon: 'warning',
        background: 'hsl(210, 45%, 45%)',
        timer: 3500,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false
    }

    let correo = $("#email-newsletter")[0].value;
    if(correo !== "") Swal.fire(emailRecibido);
    else Swal.fire(emailError);
}