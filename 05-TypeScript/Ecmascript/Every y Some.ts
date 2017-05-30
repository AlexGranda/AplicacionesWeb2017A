/**
 * Created by Alex on 29/5/2017.
 */

let arreglo = [2,8,9,10,4];

//Me devuelve un arreglo
let resultado = arreglo.map((valor, indice, arreglo)=>{
    return (valor*2)/10;
}).some((valor)=>{
    return valor<=0.2;
});

//Operador AND, si TODOS son verdaderos

let resultado2=  arreglo.every((valor, indice, arreglo)=>{
   return(valor>=7);
});

//Operador OR, si ALGUNO es verdadero

let resultado3=  arreglo.some((valor, indice, arreglo)=>{
    return(valor<2);
});

console.log(resultado);//false