const Crearcuenta = require('../models/Crearcuenta');

exports.crearCuenta = async(req, res) => { //Esta función será el cb en los métodos de router
    // // console.log('Creando el contacto');
    console.log(req.body); //Accede a la parte body del postman
    try {
        let cuenta = new Crearcuenta(req.body);
        await cuenta.save() //De Mongoose, para hacer el insertOne
        res.send(cuenta) //-> Acá podemos colocar cualquier cosa pero vamos a ver exactamente lo que se mandó.
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error. Comuníquese con el administrador');
    }
}

exports.obtenerCuentas = async (req, res) => {
    try{
        let cuentas = await Crearcuenta.find();
        res.json(cuentas); // Para convertir en JSON la respuesta
    } catch (error){
        console.log(error);
        res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
};

exports.obtenerCuenta = async(req, res) => {

    try{

        let cuenta = await Crearcuenta.findById(req.params.id); //-> Método de mongoose para buscar por id. Hay más métodos (mongoose queries). Revisa el parámetro id del request.
        if(!cuenta){
            res.status(404).json({ error: "Esa cuenta no existe"});//Estado 404 porque es el correspondiente a not found. Se muestra en front.
        }
    
        res.json(cuenta);							

    } catch(error){
	console.log(error);
	res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.');
    }
    
}

exports.borrarCuenta = async(req, res) =>{
    try{
        let cuenta = await Crearcuenta.findById(req.params.id); //-> Método de mongoose para buscar por id. Hay más métodos (mongoose queries). Revisa el parámetro id del request.
        if(!cuenta){
            res.status(404).json({ error: "Esa cuenta no existe"});//Estado 404 porque es el correspondiente a not found. Se muestra en front.
        } 
        await Crearcuenta.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'La cuenta ha sido eliminada'});
    } catch(error) {
        console.log(error);
        res.status(500).send('Lo sentimos, ocurrió un error. Inténtalo de nuevo.')
    }
}