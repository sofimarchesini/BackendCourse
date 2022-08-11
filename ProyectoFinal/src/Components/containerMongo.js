import mongoose from "mongoose";
import config from "../config.js";

mongoose.connect(config.mongoDB.URL, config.mongoDB.options);

class ContainerMongo {
    constructor(collection, schema) {
        this.collection = mongoose.model(collection, schema)
    }

    async save(prod) { this.collection.create(prod) }

    async getAll() { return  this.collection.find({})}

    async getById(id) {
        try{
            const prod = await this.collection.findById(id)
            return prod
        }catch(err){ throw new Error(err) }
    }

    async updatebyId(id, prod) {
        try{
            const newprod = await this.collection.findByIdAndUpdate(id, prod)
            return newprod
        }catch(err){ throw new Error(err)  }
    }

    async deleteById(id) {
        try{
            const deletedDoc = await this.collection.findByIdAndDelete(id)
            return deletedDoc
        }catch(err){ throw new Error(err) }
    }
}

export default ContainerMongo;