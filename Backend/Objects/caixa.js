const Objeto = require("./objeto");

class Caixa extends Objeto{

    /**
    * @param {string} forma - quadrado, circulo ou triangulo
    **/
    constructor(id, titulo, qnt, forma, medida, cor){
        super(id, titulo, qnt, medida, cor);
        this.forma = forma
    }

}


module.exports = Caixa;

