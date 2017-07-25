/**
 * Created by Alex on 1/7/2017.
 */
declare var module;

module.exports = {
  vistaOculta: (req, res) => {
    return res.view('Oculto/sorpresa');
  },
  homepage:(req, res) => {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);

    if(!parametros.busqueda){
      parametros.busqueda='';
    }

    Usuario
      .find()
      .where({
        or:[
          {
            nombres: {
              contains: parametros.busqueda
            },
          },
          {
            apellidos:{
              contains:parametros.busqueda
            }
          }]
      })
      .exec((error, records) => {
      if (error) {
        return res.serverError(error)
      }
      else {
        sails.log.info("Usuarios", records)
        return res.view('homepage', {usuarios: records})
      }
    })
  },

  crearUsuario: (req, res) => {
    return res.view('crearUsuario')
  },

  editarUsuario: (req, res) => {

    let parametros = req.allParams();
    sails.log.info(parametros.id)

    if(parametros.id)
    {
      sails.log.info("Entro con id")

      Usuario.findOne({
        id:parametros.id
      }).exec((err, usuarioEncontrado)=>{
        if(err) return res.serverError(err)

        if(usuarioEncontrado)
        {
          //Si encontro usuario
          return res.view('editarUsuario', {usuario:usuarioEncontrado})
        }
        else
        {
          //No encontro usuario
          res.redirect('/crearUsuario')
        }
      });

      //return res.view('editarUsuario')
    }
    else
    {
      sails.log.info("No entro con id")
      return res.redirect('crearUsuario')
    }


    //return res.view('editarUsuario')
  }
};
