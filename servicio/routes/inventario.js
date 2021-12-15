const express = require('express');
const router = express.Router(); // Para determinar si va por post, put, get, etc...
const inventarioController = require('../controllers/inventarioController'); //requerimiento del controlador

router.get('/', inventarioController.obtenerInventario);
router.get('/:id', inventarioController.obtenerProducto);

module.exports = router;