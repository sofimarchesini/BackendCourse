import Container from '../Components/Container.js';

class Productos extends Container{

    constructor(){
        super('../data/productos.json')
    }

    async desconectar(){}
}

export default Productos