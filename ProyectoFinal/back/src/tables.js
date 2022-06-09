import knex from 'knex';

export async function prodTable() {
    knex.schema.hasTable('productos');
    knex.schema.createTable('producto', (table) => {
        table.increments('id').primary().notNullable(),
        table.timestamp('timestamp').notNullable(),
        table.string('title', 100).notNullable(),
        table.float('price').notNullable(),
        table.string('description', 300),
        table.string('code').unique(),
        table.string('image', 200),
        table.integer('stock').notNullable()
    })
}

export async function CartTable() {
    knex.schema.hasTable('carrito');
    knex.schema.createTable('carrito', (table) => {
        table.increments('id').primary().notNullable(),
        table.timestamp('timestamp').notNullable()
    })
}