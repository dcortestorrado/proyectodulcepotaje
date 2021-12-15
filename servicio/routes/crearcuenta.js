const express = require('express');
const router = express.Router(); // Para determinar si va por post, put, get, etc...
const crearcuentaController = require('../controllers/crearcuentaController'); //requerimiento del controlador

router.get('/', crearcuentaController.obtenerCuentas);
router.get('/:id', crearcuentaController.obtenerCuenta);

router.post('/', crearcuentaController.crearCuenta);

// router.post('/', crearcuentaController.crearContacto); //Ojo con el método. Crear es POST.

module.exports = router;