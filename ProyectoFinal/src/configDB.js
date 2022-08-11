
export const options = {
    mariaDB:{
        client : 'mysql',
        connection:{
            host: '127.0.0.1',
            user:'root',
            password: '123456789',
            database: 'ecommerce'
        },
    },
    sqlite:{
        client: 'sqlite3',
        connection:{
            filename: './data/db.sqlite'
        },
        useNullAsDefault: true
    }
}