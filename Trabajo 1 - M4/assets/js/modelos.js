// Función constructora para Proyectos
function Proyecto(nombre) {
    this.nombre = nombre;
    this.trabajadores = [];
}

// Función constructora para Trabajadores
function Trabajador(nombre, rut, cargo) {
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
}

// Métodos para Trabajador
Trabajador.prototype.getNombre = function() {
    return this.nombre;
};

Trabajador.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

Trabajador.prototype.getRUT = function() {
    return this.rut;
};

Trabajador.prototype.setRUT = function(rut) {
    this.rut = rut;
};

Trabajador.prototype.getCargo = function() {
    return this.cargo;
};

Trabajador.prototype.setCargo = function(cargo) {
    this.cargo = cargo;
};

// Método para buscar trabajadores por nombre
Proyecto.prototype.buscarTrabajadorPorNombre = function(nombre) {
    return this.trabajadores.filter(function(trabajador) {
        return trabajador.getNombre().toLowerCase() === nombre.toLowerCase();
    });
};

// Método para mostrar todos los trabajadores registrados
Proyecto.prototype.mostrarTrabajadores = function() {
    return this.trabajadores;
};