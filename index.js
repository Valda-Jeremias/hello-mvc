const express  = require('express');
const mongoose = require('mongoose');

//Variables de configuracion
const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

//Contructor App
const app = express();

//Vistas
app.set('view engine', 'pug');
app.set('views', './views');

//Rutas
const router = require('./routes/index');
app.use('/', router);

//Base de datos, controlador de errores
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB conectada @ ${db}`);
  })
.catch(err => console.error(`Error de conexion: ${err}`));

//Server running
app.listen(port, () => {
  console.log(`Servidor alojado en el puerto: ${port}`);
  console.log("ANTI COPY&PASTE");
});