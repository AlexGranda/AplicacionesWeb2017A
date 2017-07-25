/**
 * Created by Alex on 22/7/2017.
 */
module.exports = {
    eliminarUsuario: function (req, res) {
        var params = req.allParams();
        if (req.method == "POST" && params.id) {
            Usuario.destroy({
                id: params.id
            }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.negotiate(err);
                //Redirigir a la misma pagina
                return res.redirect("/");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombres && parametros.apellidos && parametros.correo && parametros.id) {
            Usuario.update({
                id: parametros.id
            }, {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            }).exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEditado) {
                    //Si encontro y actualizo
                    return res.redirect('/');
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    }
};
