const mongoose = require('mongoose');

const ContactoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Contacto', ContactoSchema);