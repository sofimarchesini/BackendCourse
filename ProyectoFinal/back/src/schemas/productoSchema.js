import mongoose from "mongoose";

let productosSchema;
export default productosSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    codigo: {
        type: String
    },
    thumbnail: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
});