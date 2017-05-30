/**
 * Created by Alex on 29/5/2017.
 */


let arreglo = [1,2,3,4,5];

//Me devuelve un arreglo
let resultado = arreglo.map((valor, indice, arreglo)=>{
    return valor*indice;
});

console.log(resultado);