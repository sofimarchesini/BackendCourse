import dotenv from "dotenv";
dotenv.config();

let productosDao;
let carritosDao;
let usuariosDao;

switch (process.env.DB_CONNECTION) {
  case "mongoDB":
    import("../daos/productosMongo.js").then(({ MongoDBProductos }) => {
      productosDao = new MongoDBProductos();
    });
    import("../daos/carritoMongo.js").then(({ MongoDBCarritos }) => {
      carritosDao = new MongoDBCarritos();
    });
    break;

  default:
    throw new Error("No se ha definido una conexión a la base de datos");
}

export { productosDao, carritosDao, usuariosDao };