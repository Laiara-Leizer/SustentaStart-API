const express = require('express');
const Caixa = require("./Objects/caixa");
const Objeto = require("./Objects/objeto");
const app = express();
const port = 6969;

let objetos = {}

//app.get('/', (req, res) => {
//});

app.get('/api/getBox/:id', function(req, res){
  let id = req.params.id;

  if(objetos[id] != undefined || objetos[id] !=null){
    res.send(objetos[id])
  }else{
    res.send(id + " COULD NOT BE FOUND")
  }
});


app.put('/api/setBox/:id-:titulo-:qnt-:forma-:medida-:cor', function (req,res){
  
  let id = req.params.id;
  let titulo = req.params.titulo;
  let qnt = req.params.qnt;
  let forma = req.params.forma;
  let medida = JSON.parse(req.params.medida);
  let cor = req.params.cor;

  let buffer = new Caixa(id, titulo, qnt, forma, medida, cor); 
  
  if(buffer != null && buffer != {}){
    res.send('OK');
    objetos[id] = buffer;
    console.log(buffer);
    return;
  }
  res.send('ERROR');
  
})

// TODO: Implementar o IO para pegar objetos e salvar
function deserializeObject(){
  return Object
}

/**
    * @param {Objeto} objeto
    **/
function serializeObject(objeto){
}


app.listen(port, () => {
  console.log(`Running on ${port}`);
});