const express = require('express');
const router = express.Router(); // Para determinar si va por post, put, get, etc...
const contactanosController = require('../controllers/contactanosController'); //requerimiento del controlador

// router.get('/', (req, res) => {
//     res.send('Hola mundo con express. Voy a desarrollar mi API');
// }) 

router.post('/', contactanosController.crearContacto); //Ojo con el método. Crear es POST.

module.exports = router;