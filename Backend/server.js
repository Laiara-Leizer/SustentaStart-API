const express = require('express');

const app = express();
const port = 6969;

app.get('/', (req, res) => {
  res.send('HTestando 123');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});