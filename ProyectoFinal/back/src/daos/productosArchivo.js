import Container from '../Components/Container.js';

class ProductosDaosMongo extends Container{

    constructor(){
        super('../data/productos.json')
    }

    async desconectar(){}
}

export default ProductosDaosMongo