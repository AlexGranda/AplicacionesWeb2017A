/**
 * Created by Alex on 19/6/2017.
 */
declare var module:any;

module.exports = {


  bienvenido:(req, res) => {
    //return res.json({saludo:"hola"});

    //PUT

    if(req.method=="PUT") {
      return res.send("Hola");
    }
    else
    {
      return res.send("Error en metodo")
    }
  },

  welcome:(req, res) => {

    //POST

    //Método: req.method - devuelve el metodo

    if(req.method=="POST") {
      return res.send("Hola");
    }
    else
    {
      return res.send("Error en metodo")
    }


  }
}

