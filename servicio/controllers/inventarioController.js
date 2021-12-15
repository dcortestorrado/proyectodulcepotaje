const Inventario = require('../models/Inventario');

exports.obtenerInventario = async (req, res) => {
    try{
        let inventario = await Inventario.find();
        res.json(inventario); // Para convertir en JSON la respuesta
    } catch (error){
        console.log(error);
        res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
};

exports.obtenerProducto = async(req, res) => {

    try{

        let producto = await Inventario.findById(req.params.id); //-> Método de mongoose para buscar por id. Hay más métodos (mongoose queries). Revisa el parámetro id del request.
        if(!producto){
            res.status(404).json({ error: "Ese producto no existe"});//Estado 404 porque es el correspondiente a not found. Se muestra en front.
        }
    
        res.json(producto);							

    } catch(error){
	console.log(error);
	res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
    
}