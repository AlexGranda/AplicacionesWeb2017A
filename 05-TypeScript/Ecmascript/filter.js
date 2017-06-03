/**
 * Created by Alex on 3/6/2017.
 */
var arreglo = [
    {
        nombre: "Alex",
        apellido: "Granda",
        nota: 10,
        id: 1
    },
    {
        nombre: "Juan",
        apellido: "Bedon",
        nota: 10,
        id: 2
    },
    {
        nombre: "Juan",
        apellido: "Alimaña",
        nota: 0,
        id: 3
    },
    {
        nombre: "Vicky",
        apellido: "Su",
        nota: 10,
        id: 4
    },
    {
        nombre: "Nathy",
        apellido: "Natasha",
        nota: 6,
        id: 5
    }
];
var resultado = arreglo.filter(function (valor, indice, arreglo) {
    return valor.id > 3;
});
console.log(resultado);
