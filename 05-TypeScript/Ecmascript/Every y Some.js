/**
 * Created by Alex on 29/5/2017.
 */
var arreglo = [2, 8, 9, 10, 4];
//Me devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
}).some(function (valor) {
    return valor <= 0.2;
});
//Operador AND, si TODOS son verdaderos
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 7);
});
//Operador OR, si ALGUNO es verdadero
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor < 2);
});
console.log(resultado);
