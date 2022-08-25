import ContainerFirebase from '../../Controllers/ContainerFirebase';

class ProductosDaosFirebase extends ContainerFirebase{

    constructor(){
        super('../data/productos.json')
    }

    async desconectar(){}
}

export default ProductosDaosFirebase