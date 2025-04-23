function Registrar() {
    let nombre = document.getElementById("nombre").value;

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    let apellido = document.getElementById("apellido").value;

    if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        return false;
    }

    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    let password = document.getElementById("contrasena").value;
    let passwordConfirm = document.getElementById("contrasenaConfirm").value;
    if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    let telefono = document.getElementById("telefono").value;
    let telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return false;
    }

    let direccion = document.getElementById("direccion").value;
    if (direccion.length < 5) {
        alert("La dirección debe tener al menos 5 caracteres.");
        return false;
    }

    let array = [
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion
    ]

    localStorage.setItem("user", JSON.stringify(array));
    alert("Usuario registrado correctamente")
    window.location.href = '../vistas/login.html';
}