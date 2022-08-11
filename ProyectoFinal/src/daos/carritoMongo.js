import ContainerMongo from "../components/containerMongo";
import { carritosSchema } from "../schemas/carritoSchema.js";

class CarritosDaosMongo extends ContainerMongo {
    
    constructor() { super("carritos", carritosSchema); }

    async addProductos(carrito, productos) {
        productos.forEach(producto => {
           const prod = carrito.productos.find(p => p._id == producto._id);
              if (prod) { prod.cantidad ++;}
              else {  carrito.productos.push(producto); }
        });
        
        return this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
    }

    async deleteProducto(carrito, id) {
        const prod = carrito.productos.find(p => p._id == id);
        if (prod) { prod.cantidad > 1? prod.cantidad --: carrito.productos = carrito.productos.filter(p => p._id != id);}
        else{ throw new Error("El producto no existe"); }
        return  this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
    }
}

export default CarritosDaosMongo;