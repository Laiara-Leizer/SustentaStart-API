
class Objeto{

    /**
    * @param {number} id 
    * @param {string} titulo 
    * @param {number} qnt - quantia
    * @param {string} tipoMaterial - papel, papelão, plástico ou metal
    * @param {Array} medida - Altura, Largura, profundidade
    * @param {string} cor - string HEX, vai ser convertida no front-end  
   **/
    constructor(id, titulo, qnt, tipoMaterial, medida, cor) {
        this.id = id;
        this.titulo = titulo;
        this.qnt = qnt; 
        this.tipoMaterial = tipoMaterial;
        this.medida = medida;
        this.cor = cor;
    }

    
}
module.exports = Objeto;