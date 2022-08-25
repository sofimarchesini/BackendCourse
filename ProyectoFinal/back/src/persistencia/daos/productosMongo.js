import MongoClass from "../Controllers/MongoClass.js.js.js";
import { productosSchema } from "../../schemas/productoSchema.js";

class ProductoDaoMongo extends MongoClass {
    
    constructor() { super("productos", productosSchema); }
}

export default ProductoDaoMongo