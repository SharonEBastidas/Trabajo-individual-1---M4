document.getElementById('formularioProyecto').onsubmit = function(e) {
    e.preventDefault();

    var nombreProyecto = document.getElementById('nombreProyecto').value;
    var nombreTrabajador = document.getElementById('nombreTrabajador').value;
    var rutTrabajador = document.getElementById('rutTrabajador').value;
    var cargoTrabajador = document.getElementById('cargoTrabajador').value;

    // Validación del nombre del trabajador
    if (!validarNombre(nombreTrabajador)) {
        alert('El nombre del trabajador solo debe contener letras y espacios.');
        return;
    }

    // Validación del RUT del trabajador
    if (!validarRUT(rutTrabajador)) {
        alert('El RUT solo debe contener números.');
        return;
    }

    // Si pasa las validaciones, se instancian los objetos
    var proyecto = new Proyecto(nombreProyecto);
    var trabajador = new Trabajador(nombreTrabajador, rutTrabajador, cargoTrabajador);

    proyecto.trabajadores.push(trabajador);

    console.log('Proyecto registrado:', proyecto);
    alert('Proyecto y trabajador registrados correctamente');
};