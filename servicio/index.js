// console.log('Ejecutando el proyecto');
const express = require('express');
const conectarDB = require ('./config/db');
const app = express();

conectarDB();
app.use(express.json()); //Habilita la recepción de jsons hacia la API y se vuelve REST

// app.get('/', (req, res) => {
//     res.send('Hola mundo con express. Voy a desarrollar mi API');
// }) 

app.listen(3001, () =>{
    console.log('Proyecto back ejecutándose');
})

app.use('/api/contactos', require('./routes/contactanos'));