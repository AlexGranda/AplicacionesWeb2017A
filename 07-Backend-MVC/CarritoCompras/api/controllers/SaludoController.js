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
    }
};
