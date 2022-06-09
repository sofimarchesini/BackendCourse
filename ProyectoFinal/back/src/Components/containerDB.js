import knex from 'knex'

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

}
export default ContainerDB;