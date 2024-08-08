const request = require('supertest');
const app = require('../index(2)'); 

describe('GET /api/productos/producto', () => {
    it('responds with product details', async () => {
        const response = await request(app).get('/api/productos/producto');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            "nombre": "comedor",
            "precio": "1200000",
            "info": "mesa en madera 4 puestos",
            "marca": "propia"
        });
    });
});