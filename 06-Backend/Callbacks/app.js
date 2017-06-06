/**
 * Created by Alex on 3/6/2017.
 */

const fs = require('fs');//Importar el modulo 'fs'

const express = require('express');

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
//la ejecucion del archivo