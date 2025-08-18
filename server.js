const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let pedidos = [
    {
        "id": 1,
        "nombre": "Juan",
        "total": 5000
    }
];

app.get('/api/pedidos', (req, res) => {
    res.json(pedidos);
})


app.listen(PORT, () => {
    console.log(`Servidor ya funcionando http://localhost:${PORT}`)
});
