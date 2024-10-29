document.getElementById('formInscripcion').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    let isValid = true;
    document.getElementById('feedback').innerHTML = '';
    
    // Limpiar errores previos
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validar nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre === '' || nombre.length > 50) {
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio y no puede exceder los 50 caracteres.';
        isValid = false;
    }

    // Validar edad
    const edad = document.getElementById('edad').value;
    if (edad === '' || edad < 16) {
        document.getElementById('errorEdad').textContent = 'La edad es obligatoria y debe ser mayor o igual a 16.';
        isValid = false;
    }

    // Validar correo electrónico (opcional pero si se ingresa debe tener formato correcto)
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = 'El correo electrónico no tiene un formato válido.';
        isValid = false;
    }

    // Validar género
    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        document.getElementById('errorGenero').textContent = 'Debe seleccionar un género.';
        isValid = false;
    }

    // Validar deporte
    const deporte = document.getElementById('deporte').value;
    if (deporte === '') {
        document.getElementById('errorDeporte').textContent = 'Debe seleccionar un deporte.';
        isValid = false;
    }

    // Mostrar feedback si todo es válido
    if (isValid) {
        document.getElementById('feedback').innerHTML = `
            <strong>Datos Ingresados:</strong><br>
            Nombre: ${nombre}<br>
            Edad: ${edad}<br>
            Correo Electrónico: ${email || 'No proporcionado'}<br>
            Género: ${genero.value}<br>
            Deporte: ${deporte}<br>
        `;
        document.getElementById('formInscripcion').reset(); // Limpiar el formulario
    }
});
