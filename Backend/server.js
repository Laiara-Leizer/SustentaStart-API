const express = require('express');
const Objeto = require("./Objects/caixa");

const app = express();
const port = 6969;

app.get('/', (req, res) => {
  let myObject = new Objeto(1,"aa",1,"aaa","aaaa",[110,100,100],"#550434");
  console.log(req.headers);
  res.send(myObject);
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
  console.log(Objeto);
});