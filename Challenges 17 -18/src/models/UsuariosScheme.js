const {Schema, model} = require ('mongoose');

const UsuarioScheme = Schema({
    name: {
        type: String,
        requiered:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model ('Usuario', UsuarioScheme);