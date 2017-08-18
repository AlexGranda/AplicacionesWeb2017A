module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        Usuario
            .find()
            .where({
            or: [
                {
                    nombres: {
                        contains: parametros.busqueda
                    },
                },
                {
                    apellidos: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (error, records) {
            if (error) {
                return res.serverError(error);
            }
            else {
                var cookies = req.cookies;
                /*if (cookies.arregloUsuarios) {*/
                    //var arregloUsuarios = cookies.arregloUsuarios.idsCliente;
                    //console.log(arregloUsuarios);
                    return res.view('homepage', { usuarios: records,
                        /*arregloUsuarios: arregloUsuarios */});
                //}
                sails.log.info("Usuarios", records);
            }
        });
    },
    crearUsuario: function (req, res) {
        return res.view('crearUsuario');
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        sails.log.info(parametros.id);
        if (parametros.id) {
            sails.log.info("Entro con id");
            Usuario.findOne({
                id: parametros.id
            }).exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEncontrado) {
                    //Si encontro usuario
                    return res.view('editarUsuario', { usuario: usuarioEncontrado });
                }
                else {
                    //No encontro usuario
                    res.redirect('/crearUsuario');
                }
            });
            //return res.view('editarUsuario')
        }
        else {
            sails.log.info("No entro con id");
            return res.redirect('crearUsuario');
        }
        //return res.view('editarUsuario')
    }
};
