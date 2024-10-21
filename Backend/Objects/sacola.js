const Objeto = require("./objeto");

class Sacola extends Objeto{

    constructor(id, titulo, qnt, medida, material){
        super(id, titulo, qnt, medida, 0, material)
    }
}

module.exports = Sacola;
