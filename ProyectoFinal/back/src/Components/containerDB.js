import knex from 'knex'
import {faker} from "@faker-js/faker/locale/es";


class ContainerDB
{
    constructor(table,objectKnex)
    {
        this.table = table,
        this.objectKnex = knex(objectKnex)
    }

    save(prod){ this.objectKnex.from(this.table).insert(prod)}

    getById(id) { return this.objectKnex.from(this.table).select('*').where('id',id)}

    getAll() { return this.objectKnex.from(this.table).select('*') }

    deleteById(id){ this.objectKnex.from(this.table).select('*').where('id',id).del()}
    
    deleteAll() { this.objectKnex.from(this.table).del(); }

    aleatoryProducts(cant) {
        let aleatoryProducts = []
        for(let i=0; i<cant; i++){
            let prod = {
                name : faker.commerce.productName(),
                price : faker.commerce.price(),
                description : faker.lorem.paragraph(),
                image: faker.image.image()
            }
            saveProd = this.save(prod);
            aleatoryProducts.push(saveProd);
        }
        return aleatoryProducts;
    }

}
export default ContainerDB;