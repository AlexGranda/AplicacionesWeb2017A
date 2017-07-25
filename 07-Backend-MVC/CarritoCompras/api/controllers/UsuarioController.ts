/**
 * Created by Alex on 22/7/2017.
 */

declare var module:any;
declare var Usuario;
declare var sails;

module.exports = {


  eliminarUsuario: (req, res) => {
    let params = req.allParams()
    if(req.method=="POST"&&params.id){

      Usuario.destroy({
        id:params.id
      }).exec((err, usuarioBorrado)=>{
        if(err) return res.negotiate(err)

        //Redirigir a la misma pagina

        return res.redirect("/")
      })

    }else
    {
      return res.badRequest();
    }

  },

  editarUsuario: (req, res) => {

    let parametros = req.allParams();

    if(parametros.nombres&&parametros.apellidos&&parametros.correo&&parametros.id)
    {
      Usuario.update({
        id:parametros.id
      },
        {
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec((err, usuarioEditado)=>{
        if(err) return res.serverError(err);

        if(usuarioEditado)
        {
          //Si encontro y actualizo
          return res.redirect('/')
        }else{
          //No encontro
          return res.notFound()
        }
      })
    }
    else{
      return res.badRequest()
    }
  }
}
