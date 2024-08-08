const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const productos = require('../items.json');

router.get('/', (req, res) => {
    res.json(productos);
});

router.post('/', (req, res) => {
    const { nombre, precio, info, marca }= req.body;
    if (nombre && precio && info && marca) {
        const id = productos.length + 1;
        const newProducto = {...req.body, id};
        productos.push(newProducto);
        res.json(productos);
    } else {
    res.send('Falla en la insersión');
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, info, marca }= req.body;
    if (nombre && precio && info && marca) {
        _.each(productos, (producto, i) => {
            if (producto.id == id) {
                producto.nombre = nombre;
                producto.precio = precio;
                producto.info = info;
                producto.marca = marca;
            }
        });
        res.json(productos);
    } else {
        res.status(500).json({error:'Todos los campos son requeridos'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(productos, (producto, i) => {
        if (producto.id == id) {
            productos.splice(i, 1);
        }
    });
    res.send(productos);
});

module.exports = router;