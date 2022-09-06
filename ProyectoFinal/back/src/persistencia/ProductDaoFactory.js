import productosMongo from './daos/productosMongo.js';
import productosFirebase from './daos/productosArchivo.js';
import productosArchivo from './daos/productosArchivo.js';

class ProductDAOFactory{
    static get(type) {
        switch(type) {
            case 'MEM': return new productosFirebase()
            case 'FILE': return new productosArchivo()
            case 'MONGO': return new productosMongo()
            default: return new productosMongo()
        }
    }
}
export default new ProductDAOFactory
  
  
  