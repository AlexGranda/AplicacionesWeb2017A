/**
 * Created by Alex on 29/5/2017.
 */
//Declarar un arreglo de objetos
var arreglo = [
    {
        nombre: "Alex",
        apellido: "Granda",
        id: 1
    },
    {
        nombre: "Juan",
        apellido: "Bedon",
        id: 2
    },
    {
        nombre: "Juan",
        apellido: "Alimaña",
        id: 3
    }
];
//Devuelve la primera instancia en un arreglo segun el criterio de busqueda
arreglo.find(function (value) {
    return value.apellido == "Alimaña"; //Devuelve la primera instancia de Alimaña
});
