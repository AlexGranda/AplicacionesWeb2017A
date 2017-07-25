/**
 * Created by Alex on 19/6/2017.
 */
declare var module:any;
declare var Usuario;
declare var sails;

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




  crearUsuarioQuemado:(req, res) => {

    //Formasd de enviar parametros

    // 1 - Query parameters?nombre=Adrian&apellido=eguez
    //2 - FOrms parameters

    let parametros = req.allParams();

    //localhost:1337/Saludo/crearUsuarioQuemado -> absolutePath

    //relativePath: /Saludo/crearUsuario

    sails.log.info("parametros", parametros)

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

        Usuario.find().exec((error, records) => {
          if(error) return res.serverError(error)
          else {
            return res.view('homepage', {usuarios: records})
          }
        })

      }
    })
  },

  encontrarUsuario: (req, res) => {
    let parametros = req.allParams();

    Usuario.find(parametros).exec((error, records) => {
      if(error)
      {
        return res.serverError(error);
      }
      else
      {
        console.log('Wow, there are %d users compatible: ', records.length, records);
        return res.json(records)
      }
    })
  },

  encontrarTodos: (req, res) => {
    Usuario.find().exec((error, records) => {

    })
  },
  encontrarUnUsuario: (req,res) => {
    let parametros = req.allParams();

    Usuario.findOne(parametros).exec(function (error, record) {
      if(error) {
        return res.serverError(error)
      }
      if(!record)
      {
        return res.notFound('Could not find user, sorry')
      }
      else
      {
        return res.json(record)
      }
    })
  },
  encontrarOCrear: (req, res) => {
    let parametros = req.allParams();

    Usuario.findOrCreate({nombre:parametros.nombre}, {parametros}).exec(function createFindCB(error, createdOrFoundRecords){
      console.log('What\'s cookin\' '+createdOrFoundRecords.name+'?');
      return res.json(createdOrFoundRecords);
    });


  },
  actualizarNombre: (req, res) => {
    let parametros = req.allParams();

    Usuario.update({nombres:parametros.nombreOriginal},{nombre:parametros.nombreNuevo}).exec(function afterwards(err, updated){

      if (err) {
        // handle error here- e.g. `res.serverError(err);`
        return;
      }
      else {
        console.log('Updated user to have name ' + updated[0].nombres);
        return res.json(updated);
      }
    });
  }
}



