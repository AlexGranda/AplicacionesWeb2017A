/**
 * Created by Alex on 19/6/2017.
 */
declare var module:any;
declare var Usuario;

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
  },

  //ejemplos deber
  status:(req, res) => {
    res.status(505);
    return res.send("This page will always go to 505");
  },
  set: (req, res) => {
    res.set('holi', 'boli');
    res.set('xq', 'tan soli');
    res.set('aqui', 'en la poli');
    return res.send();
  },
  get: (req, res) => {
    res.get('Connection');
    return res.send();
  },
  cookie: (req, res) => {
    res.cookie('cookie','woof');
    res.cookie('cookie1','arf');
    return res.send();
  },
  clearCookie: (req, res) => {
    res.clearCookie('cookie');
    res.clearCookie('cookie1');
    return res.send();
  },
  redirect: (req, res) => {
    res.redirect('www.google.com');
    return res.send();
  },
  location: (req, res) => {
    res.location('foo/bar');
    return res.send();
  },



  crearUsuarioQuemado:(req, res) => {

    //Formasd de enviar parametros

    // 1 - Query parameters?nombre=Adrian&apellido=eguez
    //2 - FOrms parameters

    let parametros = req.allParams();

    let nuevoUsuario = {
      nombres: parametros.nombres,
      apellidos: parametros.apellidos,
      password: parametros.password,
      correo: parametros.correo,
      fechaNacimiento: parametros.fechaNacimiento
    };

    /*let nuevoUsuario = {
      nombres: "Alexandra",
      apellidos: "Granda",
      password: "1234",
      correo: "1@1",
      fechaNacimiento: new Date
    };*/

    Usuario.create(nuevoUsuario).exec((error, usuarioCreado) => {
      if(error)
      {
        return res.serverError(error);
      }
      else
      {
        return res.ok(usuarioCreado)
      }
    })
  }
}



