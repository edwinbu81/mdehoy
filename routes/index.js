const {Router} = require('express');
const router = Router();

// Rutas
router.get('/producto', (req, res) => {
    const data = {
        "nombre" : "comedor",
        "precio" : "1200000",
        "info" : "mesa en madera 4 puestos",
        "marca" : "propia"
    };
    res.json(data);
});

module.exports = router;