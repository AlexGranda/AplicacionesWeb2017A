module.exports = {
    bienvenido: function (req, res) {
        //return res.json({saludo:"hola"});
        //PUT
        if (req.method == "PUT") {
            return res.send("Hola");
        }
        else {
            return res.send("Error en metodo");
        }
    },
    welcome: function (req, res) {
        //POST
        //Método: req.method - devuelve el metodo
        if (req.method == "POST") {
            return res.send("Hola");
        }
        else {
            return res.send("Error en metodo");
        }
    },
    //ejemplos deber
    status: function (req, res) {
        res.status(505);
        return res.send("This page will always go to 505");
    },
    set: function (req, res) {
        res.set('holi', 'boli');
        res.set('xq', 'tan soli');
        res.set('aqui', 'en la poli');
        return res.send();
    },
    get: function (req, res) {
        res.get('Connection');
        return res.send();
    },
    cookie: function (req, res) {
        res.cookie('cookie', 'woof');
        res.cookie('cookie1', 'arf');
        return res.send();
    },
    clearCookie: function (req, res) {
        res.clearCookie('cookie');
        res.clearCookie('cookie1');
        return res.send();
    },
    redirect: function (req, res) {
        res.redirect('www.google.com');
        return res.send();
    },
    location: function (req, res) {
        res.location('foo/bar');
        return res.send();
    },
    crearUsuarioQuemado: function (req, res) {
        //Formasd de enviar parametros
        // 1 - Query parameters?nombre=Adrian&apellido=eguez
        //2 - FOrms parameters
        var parametros = req.allParams();
        var nuevoUsuario = {
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
        Usuario.create(nuevoUsuario).exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};
