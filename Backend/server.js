const express = require('express');
const Caixa = require("./Objects/caixa");
const Objeto = require("./Objects/objeto");
const sacola = require("./Objects/sacola");
const Sacola = require('./Objects/sacola');
const app = express();
const port = 6969;

let objetos = {"sacolas":{}, "caixas":{}}

//app.get('/', (req, res) => {
//});



app.get('/api/getBox/:id', function(req, res){
  let id = req.params.id;

  if(objetos["caixas"][id] != undefined || objetos["caixas"][id] !=null){
    res.send(objetos["caixas"][id])
  }else{
    res.send(id + " COULD NOT BE FOUND")
  }
});

let materiaisCaixa = ["MDF", "papel"]

app.put('/api/setBox/:id-:titulo-:qnt-:forma-:medida-:cor-:material', function (req,res){
  
  let id = req.params.id;
  let titulo = req.params.titulo;
  let qnt = req.params.qnt;
  let forma = req.params.forma;
  let medida = JSON.parse(req.params.medida);
  let cor = req.params.cor;
  let material = req.params.material;

  let isValidMaterial = false;
  let count = 0;
  while (isValidMaterial == false && count < materiaisCaixa.length){
    if(materiaisCaixa[count] == material){
      isValidMaterial = true;
    }      
      count++;
  }

  if(isValidMaterial == false){
    res.send('ERROR: THIS MATERIAL IS NOT SUPPORTED, SUPPORTED MATERIALS: ' + materiaisCaixa)
  }
  let buffer = new Caixa(id, titulo, qnt, forma, medida, cor); 
  
  if(buffer != null && buffer != {}){
    res.send('OK');
    objetos["caixas"][id] = buffer;
    console.log(buffer);
    return;
  }
  res.send('ERROR');
  
})


app.get('/api/getSacola/:id', function(req, res){
  let id = req.params.id;

  if(objetos["sacolas"][id] != undefined || objetos["sacolas"][id] !=null){
    res.send(objetos["sacolas"][id])
  }else{
    res.send(id + " COULD NOT BE FOUND")
  }
});

materiaisSacola = ["plastico","mandioca","papel"];

app.put('/api/setSacola/:id-:titulo-:qnt-:medida-:material', function (req,res){
  
  let id = req.params.id;
  let titulo = req.params.titulo;
  let qnt = req.params.qnt;
  let medida = JSON.parse(req.params.medida);
  let material = req.params.material;
        
  let isValidMaterial = false;
  let count = 0;
  while (isValidMaterial == false && count < materiaisSacola.length){
    if(materiaisSacola[count] == material){
      isValidMaterial = true;
    }      
      count++;
  }

  if(isValidMaterial == false){
    res.send('ERROR: THIS MATERIAL IS NOT SUPPORTED, SUPPORTED MATERIALS: ' + materiaisSacola)
  }

  let buffer = new Sacola(id, titulo, qnt, medida, material); 
  
  if(buffer != null && buffer != {}){
    res.send('OK');
    objetos["sacolas"][id] = buffer;
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