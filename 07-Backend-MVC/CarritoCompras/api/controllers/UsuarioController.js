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
};
