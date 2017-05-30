
/**
 * Created by Alex on 29/5/2017.
 */

function multiploicarX2(n1, n2){
    let resultado = {
        n1:n1,
        n2:n2
    };//objeto

    resultado.n1 = resultado.n1*2;
    resultado.n2 = resultado.n2*2;

    return resultado;
}

//con object literals

function multiploicarX2v1(n1, n2){
    let resultado = {
        n1,
        n2
    };//objeto

    resultado.n1 = resultado.n1*2;
    resultado.n2 = resultado.n2*2;

    return resultado;
}
