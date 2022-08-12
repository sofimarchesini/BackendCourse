import yargs from 'yargs';
import  app from "./app.js";
import http from "http";
import {hideBin} from "yargs/helpers";

const PORT = process.env.PORT | 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor listo en el puerto ${PORT} `);
});

