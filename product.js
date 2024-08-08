const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',     
    user: 'root',          
    password: '',  
    database: 'login_bd_tienda' 
});

connection.connect(err => {
    if (err) {
        console.error('Error al conectar a la Base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Obtener todos los productos
router.get('/', (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener productos' });
        }
        res.json(results);
    });
});

// Obtener un producto por su ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener producto' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(results[0]);
    });
});

// Crear un nuevo producto
router.post('/', (req, res) => {
    const { Pro_nombre, Pro_valor, Pro_descripcion, Pro_marca } = req.body;
    if (!Pro_nombre || !Pro_valor || !Pro_descripcion || !Pro_marca) {
        return res.status(400).json({ message: 'Faltan datos del producto' });
    }
    const product = { Pro_nombre, Pro_valor, Pro_descripcion, Pro_marca };
    connection.query('INSERT INTO productos SET ?', product, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear producto' });
        }
        res.status(201).json({ id: results.insertId, ...product });
    });
});

// Actualizar un producto por su ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { Pro_nombre, Pro_valor, Pro_descripcion, Pro_marca } = req.body;
    const product = { Pro_nombre, Pro_valor, Pro_descripcion, Pro_marca };
    connection.query('UPDATE productos SET ? WHERE id = ?', [product, id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al actualizar producto' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ id, ...product });
    });
});

// Eliminar un producto por su ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar producto' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(204).send();
    });
});

module.exports = router;