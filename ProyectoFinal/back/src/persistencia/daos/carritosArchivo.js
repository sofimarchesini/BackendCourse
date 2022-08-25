import Container from '../contenedores/Container.js';

class Carritos extends Container{

    constructor(){
        super('../data/Carritos.json')
    }

    async desconectar(){}
}

export default Carritos