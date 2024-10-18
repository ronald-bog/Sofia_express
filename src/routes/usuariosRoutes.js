const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');

router.get('/prueba', usuariosController.prueba);
router.get('/usuarios', usuariosController.getUsuarios);
router.post('/usuarios', usuariosController.createUsuario);
router.put('/usuarios/:id', usuariosController.updateUsuario);
router.delete('/usuarios/:id', usuariosController.deleteUsuario);

module.exports = router;