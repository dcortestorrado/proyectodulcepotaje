const Contacto = require('../models/Contactanos');

exports.crearContacto = async(req, res) => { //Esta función será el cb en los métodos de router
    // // console.log('Creando el contacto');
    console.log(req.body); //Accede a la parte body del postman
    try {
        let contacto = new Contacto(req.body);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error. Comuníquese con el administrador');
    }
}

exports.obtenerContactos = async (req, res) => {
    try{
        let contactos = await Contacto.find();
        res.json(productos); // Para convertir en JSON la respuesta
    } catch (error){
        console.log(error);
        res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
};

exports.obtenerContacto = async(req, res) => {

    try{

        let contacto = await Contacto.findById(req.params.id); //-> Método de mongoose para buscar por id. Hay más métodos (mongoose queries). Revisa el parámetro id del request.
        if(!producto){
            res.status(404).json({ error: "Ese mensaje no existe"});//Estado 404 porque es el correspondiente a not found. Se muestra en front.
        }
    
        res.json(producto);							

    } catch(error){
	console.log(error);
	res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
    
}