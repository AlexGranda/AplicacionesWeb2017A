/**
 * Created by Alex on 3/6/2017.
 */

class usuario{
    public nombre:string;
    private apellido:string;

    constructor(public nombre:string, private apellido?:string){//parametros opcionales siempre al final
        /*this.nombre = nombre;
        this.apellido = apellido;*/
    }
    //funcion, devuelven void por defecto
    imprimirNombre(saludo:string, titulo?:string):string{
        return `${saludo}, ${titulo}
        ${this.nombre} ${this.apellido}`;
    }
}

let alex:usuario = new usuario("Alex", "Granda");

console.log(alex.imprimirNombre("Hi", "Miss"));
