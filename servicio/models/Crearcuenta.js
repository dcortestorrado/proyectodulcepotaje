const mongoose = require('mongoose');

const CrearcuentaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Crearcuenta', CrearcuentaSchema);