/**
 * Created by Alex on 29/5/2017.
 */
function holaMundo() {
    console.log("Hola Mundo");
}
;
var holaMundo2 = function () {
    console.log("Hola Mundo");
};
var holaMundo3 = function () {
    console.log("Hola Mundo");
};
var holamundo4 = function () { return console.log("Hola Mundo"); };
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; }; //se omite el return
var holaMundo7 = function () {
    var a = 2;
    return a + 3;
};
var nombreUsuario = "Alexandra Granda";
var saludar = function (nombre) { return "Hola" + nombreUsuario; }; //retorna un string sin necesidad de especificarlo
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
console.log(saludarConApellido("ALexandra", "Granda"));
