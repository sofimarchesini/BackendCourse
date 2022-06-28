import MongoClass from "../Components/MongoClass.js";
import { productosSchema } from "../schemas/productoSchema.js";

class ProductoDaoMongo extends MongoClass {
    
    constructor() { super("productos", productosSchema); }
}

export default ProductoDaoMongo