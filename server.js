const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productos = [{
    "id": 1,
    "nombre": "Laptop",
    "precio": 12000
},
{
    "id": 2,
    "nombre": "Monitor",
    "precio": 15000
}];

app.get('/api/productos', (req, res) => {
    res.json(productos)
});

app.listen(PORT, () => {
    console.log(`Estamos conectados http://localhost:${PORT}`);
})