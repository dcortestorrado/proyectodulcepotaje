const Contacto = require('../models/Contactanos');

exports.crearContacto = async(req, res) => { //Esta función será el cb en los métodos de router
    // // console.log('Creando el contacto');
    // console.log(req.body); //Accede a la parte body del postman
    try {
        let contacto = new Contacto(req.body);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error. Comuníquese con el administrador');
    }
}

