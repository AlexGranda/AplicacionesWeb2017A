/**
 * Created by Alex on 5/6/2017.
 */

//Calculadora q suma dos numeros y resta dos numeros

//devuelve un objeto con varios metodos

let Passwords = require('machinepack-passwords');

//Se importa todo el paquete en la variable passwords

exports.calculadoraUdla = {
    sumar:(n1, n2) =>{
        return n1+n2;
    },
    restar:(n1,n2)=>{
        return n1-n2;
    },
    multiplicar:(n1,n2)=>{
        return n1*n2;
    },
    passwords:Passwords
};
