module.exports = {
    attributes: {
        nombres: {
            type: "string"
        },
        password: {
            type: "string"
        },
        fechaNacimiento: {
            type: "date"
        },
        apellidos: {
            type: "string"
        },
        correo: {
            type: "string"
        },
        matriculas: {
            collection: 'Matricula',
            via: 'fkIdUsuario'
        }
    }
};
