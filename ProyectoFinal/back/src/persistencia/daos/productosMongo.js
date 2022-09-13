import productosSchema from "../../schemas/productoSchema.js";

class ProductoDaoMongo  {
    
    constructor() { ("productos", productosSchema); }

    async get(id) {
        try {
            return await productosSchema.findById(id);
        } catch (error) {
            logger.error(`error al buscar producto en la db . ${error}`)
        }
        }

    async getAll(query = {}) {
        try {
            return await productosSchema.find(query);
        } catch (error) {
            logger.error(`error al buscar los productos en la db . ${error}`)
        }
        }

    async create(product) {
        try {
            return await productosSchema.create(product);
        } catch (error) {
            logger.error(`error al crear producto en la db. ${error}`)
        }
    }

    async update(id, updatedProduct) {
        try {
            return await productosSchema.findByIdAndUpdate(id, updatedProduct);
        } catch (error) {
            logger.error(`error al actualizar producto en la db. ${error}`)
        }
    }

    async delete(id) {
        try {
            return await productosSchema.findByIdAndDelete(id);
        } catch (error) {
            logger.error(`error al borrar producto en la db . ${error}`)
        }
    }
}
    
export default ProductoDaoMongo