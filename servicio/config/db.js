const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const conectarDB = async() => {
    try{
        await mongoose.connect(process.env.DATA_BASE_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  
        });
        console.log('Base de datos conectada');
    } catch {
        console.log(error);
        //configuración para interrumpir el servicio
        process.exit(1) // Booleano, true.
    }
}

module.exports = conectarDB;