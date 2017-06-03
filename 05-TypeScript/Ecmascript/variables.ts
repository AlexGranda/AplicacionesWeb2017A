/**
 * Created by Alex on 3/6/2017.
 */

let numero:number = 2;

//numero = "Alex"; No se puede guardar tipos de dato String en numbers

numero = 18;

let verdad:boolean = true;

verdad = null;

verdad = undefined;

verdad = false;

//nombreVariable:tipoVariable

let nombre:String = "Alex";

nombre = `Yo no soy ${verdad}`;

//let arregloNumeros:number = [1,2,3]; no se puede asiganr arreglos a tipos de datos

let arregloNumber:number[] = [1,2]

let arregloNumber2:Array <number> = [1,2];

//interface es como crear un tipo de dato, o algo mas

interface UsuarioInterface{
    //Metodos y atributos que tienen la interfaz
    nombre:String,
    apellido:String,
    nota:number,
    id:number
}

let usuario:UsuarioInterface = {
    nombre:"Alex",
    apellido:"Granda",
    nota:10,
    id:2
}

let juego:any = {};
juego = 2;

juego = "String"

juego = 2;//a este nivel, con let, el compilador infiere que la variable es un 'number'

juego = "Nombre";

juego = {};