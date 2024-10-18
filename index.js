const express = require('express');
const logger = require('./src/middlewares/logger')
const notFound = require('./src/middlewares/notFound')
const routes = require('./src/routes/usuariosRoutes')

const app = express()
const PORT = 3000;

app.use(logger)
app.use(express.json());
app.use(routes)

app.use(notFound);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error en servidor", err);
        return;
    }
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
