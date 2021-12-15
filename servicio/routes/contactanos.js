const express = require('express');
const router = express.Router(); // Para determinar si va por post, put, get, etc...
const contactanosController = require('../controllers/contactanosController'); //requerimiento del controlador

router.get('/', contactanosController.obtenerContactos);
router.get('/:id', contactanosController.obtenerContacto);

router.post('/', contactanosController.crearContacto); //Ojo con el método. Crear es POST.
router.delete('/:id', contactanosController.borrarContacto);

module.exports = router;