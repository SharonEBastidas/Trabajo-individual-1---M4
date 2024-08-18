// Funciones de validación

// Validación del nombre (solo letras y espacios)
function validarNombre(nombre) {
    var regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombre);
}

// Validación del RUT (solo números)
function validarRUT(rut) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(rut);
}