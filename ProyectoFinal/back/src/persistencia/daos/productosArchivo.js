import Container from '../contenedores/Container.js';

class Productos extends Container{

    constructor(){
        super('../data/productos.json')
    }

    async desconectar(){}
}

export default Productos