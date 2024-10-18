const mysql = require("mysql2");

const datosBD = {
    host: "localhost",
    user: "root",
    password: "123",
    database: "data_flask"
};

const conexionDB = mysql.createPool(datosBD);

conexionDB.on('acquire', (connection) => {
    console.log('Conexion adquirida: ID', connection.threadId);
});

module.exports = conexionDB;