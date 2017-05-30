/**
 * Created by Alex on 29/5/2017.
 */
var arregloNumeros = [1, 2, 3, 4];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es: " + arreglo);
}); //Funcion anonima (current value, index, array)
console.log("El resultado es igual a: ", resultado);
