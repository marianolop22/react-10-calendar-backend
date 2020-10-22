const express = require('express');
const dotEnv = require ('dotenv');
const { dbConnection } = require('./db/config');
const cors = require('cors')


//variables de ambiente
dotEnv.config();

// console.log(process.env);
// db user = mern_user
// db pass = 7S31JYe60MWkZ3UR

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//cors
app.use(cors());


//directorio publico
app.use( express.static('public'));

// Lectura y parseo del  body
app.use ( express.json());

//rutas
app.use ('/api/auth', require('./routes/auth'));

// TODO: auth / crear/ login/renew
// TODO: crud: eventos

//peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor correiendo en puerto ${4000}`)
});