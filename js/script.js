const formulario = document.querySelector(".needs-validation");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!formulario.checkValidity()) {
        event.stopPropagation();
        formulario.classList.add("was-validated");
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const tratamiento = document.getElementById("tratamiento").value;

    const numeroWhatsApp = "522281136218";

    const mensaje = `Hola, me gustaría solicitar una cita.

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Tratamiento de interés: ${tratamiento}`;

    const urlWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.location.href = urlWhatsApp;
});