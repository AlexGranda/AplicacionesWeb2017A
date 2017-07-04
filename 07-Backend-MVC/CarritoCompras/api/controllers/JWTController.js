/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require('jsonwebtoken');

module.exports = {

  EmitirJWT: function (req, res) {
    var parametros = req.allParams();
    if(parametros.id)
    {

      //Tiempo de validez
      //( DATO -> TOKEN, ID )
      //( SECRETO )
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          id: parametros.id
        }
      }, 'mi mama me mima');

      return res.ok(token);
    }
    else
    {
      return res.badRequest("No envía ID");
    }
  },

  Validar: function (req, res) {
    var parametros = req.allParams();
    if(parametros.token){
      var decodificado = jwt.verify(parametros.token, 'mi mama me mima');

      return res.ok(decodificado);
    }else
    {
      return res.badRequest('No envia el token')
    }
  },

  ValidarSecret: function (req, res) {
    var parametros = req.allParams();
    if(parametros.token){
      var decodificado = jwt.verify(parametros.token, 'secret');

      return res.ok(decodificado);
    }else
    {
      return res.badRequest('No envia el token')
    }
  }

};

