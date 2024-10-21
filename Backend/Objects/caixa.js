const Objeto = require("./objeto");

class Caixa extends Objeto{

    /**
    * @param {string} forma - quadrado, circulo ou triangulo
    **/
    constructor(id, titulo, qnt, forma, medida, cor, material){
        super(id, titulo, qnt, medida, cor, material);
        this.forma = forma
    }

}


module.exports = Caixa;

