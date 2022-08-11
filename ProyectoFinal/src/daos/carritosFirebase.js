import ContainerFirebase from '../Components/ContainerFirebase';

class CarritosDaosFirebase extends ContainerFirebase{

    constructor(){
        super('../data/carts.json')
    }

    async desconectar(){}
}

export default CarritosDaosFirebase