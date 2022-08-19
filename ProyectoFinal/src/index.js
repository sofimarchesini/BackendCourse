import  app from "./app.js";
import http from "http";

const PORT = process.env.PORT | 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor listo en el puerto ${PORT} `);
});

