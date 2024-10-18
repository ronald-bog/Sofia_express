const conexionDB = require('../config/db');

function prueba() {
    return new Promise((resolve, reject) => {
        const sql1 = "SELECT 1";
        conexionDB.query(sql1, (err, result) => err ? reject(err) : resolve(result));
    });
}

function getUsuarios() {
    return new Promise((resolve, reject) => {
        const sql2 = "SELECT * FROM usuarios";
        conexionDB.query(sql2, (err, result) => err ? reject(err) : resolve(result));
    });
}

function createUsuario(nombre, correo) {
    return new Promise((resolve, reject) => {
        const sql3 = "INSERT INTO usuarios (nombre, correo) VALUES (?,?)";
        conexionDB.execute(sql3, [nombre, correo],
            (err, result) => err ? reject(err) : resolve(result.insertId)
        );
    });
}

function updateUsuario(nombre, correo, id) {
    return new Promise((resolve, reject) => {
        const sql4 = "UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?";
        conexionDB.execute(sql4, [nombre, correo, id], (err, result) =>
            err ? reject(err) : resolve(result));
    });
}

function deleteUsuario(id) {
    return new Promise((resolve, reject) => {
        const sql5 = "DELETE FROM usuarios WHERE id = ?";
        conexionDB.execute(sql5, [id], (err, result) =>
            err ? reject(err) : resolve(result));
    });
}

module.exports = {
    prueba,
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
};