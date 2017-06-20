/**
 * Created by Alex on 3/6/2017.
 */
var usuario = (function () {
    function usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //funcion, devuelven void por defecto
    usuario.prototype.imprimirNombre = function (saludo, titulo) {
        return saludo + ", " + titulo + " " + this.nombre + " " + this.apellido;
    };
    return usuario;
}());
var alex = new usuario("Alex", "Granda");
console.log(alex.imprimirNombre("Hi", "Miss"));
