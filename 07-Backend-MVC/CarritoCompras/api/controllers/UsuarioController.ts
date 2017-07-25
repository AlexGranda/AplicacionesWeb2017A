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
}
