const notFound = (req, res) => {
    res.status(405).send('Ruta no encontrada');
}

module.exports = notFound

