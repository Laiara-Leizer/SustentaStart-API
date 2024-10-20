const Objeto = require("./objeto");

class Caixa extends Objeto{

    /**
    * @param {string} forma - quadrado, circulo ou triangulo
    **/
    constructor(id, titulo, qnt, tipoMaterial, forma, medida, cor){
        super(id, titulo, qnt, tipoMaterial, medida, cor);
        this.forma = forma
    }

}


module.exports = Caixa;

