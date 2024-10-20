
class Objeto{

    /**
    * @param {number} id 
    * @param {string} titulo 
    * @param {number} qnt - quantia
    * @param {string} tipoMaterial - papel, papelão, plástico ou metal
    * @param {string} forma - quadrado, circulo ou triangulo
    * @param {Array} medida - Altura, Largura, profundidade
    * @param {string} cor - string HEX, vai ser convertida no front-end  
   **/
    constructor(id, titulo, qnt, tipoMaterial, forma, medida, cor) {
        this.id = id;
        this.titulo = titulo;
        this.qnt = qnt; 
        this.tipoMaterial = tipoMaterial;
        this.forma = forma;
        this.medida = medida;
        this.cor = cor;
    }

    
}
module.exports = Objeto;