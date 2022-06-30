import dotenv from 'dotenv';
dotenv.config();

let productosDao
let carritosDao

switch (process.env.DB_CONNECTION) {
    case 'mongoDB':
        import('./carritoMongo.js').then(({CarritosDaosMongo})=>{  carritosDao = new CarritosDaosMongo(); })
        import('./productosMongo.js').then(({ProductoDaoMongo})=>{ productosDao = new ProductoDaoMongo();  })
        break;
    case 'firebase':
        import('./productosFirebase.js').then(({ProductosDaosFirebase})=>{ productosDao = new ProductosDaosFirebase(); })
        import('./carritosFirebase.js').then(({CarritosDaosFirebase})=>{ carritosDao = new CarritosDaosFirebase();  })
        break;
    default: throw new Error('No se ha definido una conexión a la base de datos');
        break;
}

export {productosDao, carritosDao};