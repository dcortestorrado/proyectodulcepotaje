const mongoose = require('mongoose');

const InventarioSchema = mongoose.Schema({
    id:{
        type: String,
    },
    nombre_producto:{
        type: String,
    },
    rama:{
        type: String,
    },
    categoria:{
        type: String,
    },

    data_producto: [{
        presentacion: {
        type: String
    },  
        cantidad: {
        type: Number,
        required: true
    },  
        precio: {
        type:Number
    }
    }]
});

module.exports = mongoose.model('Inventario', InventarioSchema);