const mongoose = require('mongoose');

const InventarioSchema = mongoose.Schema({
//     _id: {
//         type: String,
//         required: true
//     },
//     nombre_producto:{
//         type: String,
//         required: true
//     },
//     rama:{
//         type: String,
//         required: true
//     },
//     categoria:{
//         type: String,
//         required: true
//     },

//     data_producto: [{presentacion: {
//         type: String,
//         required: true
//     }, String, cantidad: Number, precio: Number}]
});

module.exports = mongoose.model('Inventario', InventarioSchema);