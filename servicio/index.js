// console.log('Ejecutando el proyecto');
const express = require('express');
const conectarDB = require ('./config/db');
const cors = require ('cors');
const app = express();

conectarDB();
app.use(cors());
app.use(express.json()); //Habilita la recepción de jsons hacia la API y se vuelve REST

// app.get('/', (req, res) => {
//     res.send('Hola mundo con express. Voy a desarrollar mi API');
// }) 

app.use('/api/contactos/', require('./routes/contactanos'));
app.use('/api/cuentas/', require('./routes/crearcuenta'));
app.use('/api/inventario/', require ('./routes/inventario'));


app.listen(3001, () =>{
    console.log('Proyecto back ejecutándose');
})
