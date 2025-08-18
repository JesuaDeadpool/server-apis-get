const express = require('express');
const app = express();
const port = 3000;

app.get('/api/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: "Juan", email: "juan@email.com" },
  ]);
});
