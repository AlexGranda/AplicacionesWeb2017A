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
    },
    AnadirUsuarioCarrito: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            var cookies = req.cookies;
            console.log(cookies);
            if (cookies.arregloUsuarios) {
                var arregloUsuarios = cookies.arregloUsuarios.idsCliente;
                var existeUsuario = arregloUsuarios.find(function (idUsuario) {
                    return idUsuario == parametros.id;
                });
                console.log('existeUsuario', existeUsuario);
                if (existeUsuario) {
                    return res.redirect('/');
                }
                else {
                    arregloUsuarios.push(parametros.id);
                    console.log(arregloUsuarios);
                    res.cookie('arregloUsuarios', {
                        idsCliente: arregloUsuarios
                    });
                    return res.redirect('/');
                }
            }
            else {
                var arregloUsuarios = [];
                arregloUsuarios.push(parametros.id);
                res.cookie('arregloUsuarios', {
                    idsCliente: arregloUsuarios
                });
                //return res.redirect('/')
            }
            return res.redirect('/');
        }
        else {
            return res.badRequest('No envia parametros');
        }
    }
};
