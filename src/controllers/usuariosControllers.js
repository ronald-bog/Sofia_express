const usuariosService = require('../services/usuariosServices');

async function prueba(req, res) {
    try {
        await usuariosService.prueba();
        res.status(200).json({ response: `Prueba exitosa` });
    } catch {
        res.status(500).json({ mensaje: 'Error de servidor' });
    }
}

async function getUsuarios(req, res) {
    try {
        const usuarios = await usuariosService.getUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en servidor de base de Datos', error });
    }
}

async function createUsuario(req, res) {
    const { nombre, correo } = req.body;
    try {
        const usuarioID = await usuariosService.createUsuario(nombre, correo);
        res.status(201)
            .json({
                response: `Usuario creado exitosamente con id ${usuarioID}`,
                id: usuarioID
            });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en servidor de base de Datos', error });
    }
}

async function updateUsuario(req, res) {
    const id = req.params.id;
    const { nombre, correo } = req.body;
    try {
        await usuariosService.updateUsuario(nombre, correo, id);
        res.status(200).json({ respuesta: `Usuario con id: ${id} editado` });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en servidor de base de Datos', error });
    }
}

async function deleteUsuario(req, res) {
    const id = req.params.id;
    try {
        await usuariosService.deleteUsuario(id);
        res.status(200).json({ respuesta: `Usuario con id: ${id} ELIMINADO` });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en servidor de base de Datos', error });
    }
}

module.exports = {
    prueba,
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}