const express = require('express');
const router = express.Router(); // Para determinar si va por post, put, get, etc...
const contactanosController = require('../controllers/contactanosController'); //requerimiento del controlador

router.get('/', contactanosController.obtenerContactos);
router.get('/', contactanosController.obtenerContacto);

router.post('/', contactanosController.crearContacto); //Ojo con el método. Crear es POST.

module.exports = router;