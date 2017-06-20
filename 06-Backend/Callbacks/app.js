/**
 * Created by Alex on 3/6/2017.
 */

const fs = require('fs');//Importar el modulo 'fs'

const express = require('express');

const calculadora = require('twj-2017-a-granda');

let a=2,
    b=3,
    resultadoSuma,
    resultadoResta,
    resultadoMultiplicacion;

resultadoSuma = calculadora.calculadoraUdla.sumar(a,b);

resultadoResta = calculadora.calculadoraUdla.restar(a,b);

resultadoMultiplicacion = calculadora.calculadoraUdla.multiplicar(a,b);


console.log(`El resultado de la suma es: ${resultadoSuma}`);
console.log(`El resultado de la resta es: ${resultadoResta}`);
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);

let passwordAEncriptar = "absdabsdabs"


calculadora.calculadoraUdla.passwords.encryptPassword({
    password: passwordAEncriptar,
}).exec({
    error: (error)=> {
        console.log(`Error ${error}`);
    },
    success: (resultado)=> {
        console.log(`Resultado password encriptado: ${resultado}`);
    },
});


console.log("Empieza")

//1.- Nombre y ruta del archivo
//2.- Codificacion
//3.- Anonymous function
//4.- (error!, contenido dle archivo)

fs.readFile('texto.txt','utf8', (err, data)=>  {
    if (err) throw err;
console.log(data);
});

console.log("Termina")

//se corre raro xq es un callback, cuando le digo q lea el archivo
//se demora un tiempo, si una instruccion de demora, el hilo continua
//la ejecucion del archivo|