import MongoClass from "../contenedores/containerMongo.js";
import productosSchema  from "../../schemas/productoSchema.js";

export  class MongoDBProductos extends MongoClass {
    constructor() { super("productos", productosSchema); }
}