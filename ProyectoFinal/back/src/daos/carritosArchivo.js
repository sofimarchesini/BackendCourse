import Container from '../Components/Container.js';

class CarritosDaosMongo extends Container{

    constructor(){
        super('../data/Carritos.json')
    }

    async desconectar(){}
}

export default CarritosDaosMongo