
class Objeto{

    /**
    * @param {number} id 
    * @param {string} titulo 
    * @param {number} qnt - quantia
    * @param {string} tipoMaterial - papel, papelão, plástico ou metal
    * @param {Array} medida - Altura, Largura, profundidade
    * @param {string} cor - string HEX, vai ser convertida no front-end  
   **/
    constructor(id, titulo, qnt, medida, cor, material) {
        this.id = id;
        this.titulo = titulo;
        this.qnt = qnt; 
        this.medida = medida;
        this.cor = cor;
        this.material = material;
    }

    
}
module.exports = Objeto;