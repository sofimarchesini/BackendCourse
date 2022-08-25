import express from "express";
import cluster from "cluster";
import morgan from "morgan";
import os from "os";

const PORT =8080;
const Type = process.argv[2];

const nroCPU = os.cpus().length;
const app = express();

app.use(morgan("dev"));

if (Type === "cluster" && cluster.isPrimary) {
  for (let i = 0; i < nroCPU; i++) {cluster.fork();}
} else {
  app.get("/", (req, res) => {
    if (Type !== "cluster") {
      res.send(`Server en Fork Puerto =${PORT}, PID = ${process.pid}`);
    } else {
      res.send(
        `Server en cluster Puerto =${PORT}, PID = ${process.pid}`
      );
    }
  });
  
  app.get("/datos", (req, res) => {
    res.send(
      `puerto = ${PORT} , PID = ${process.pid},  Cantidad de procesadores = ${nroCPU}`
    );
  });

  const server = app.listen(PORT);
  server.emit(console.log(`Server on port ${PORT}...`));
  server.on("error", (err) => {console.log(`Error en conexion: ${err}`);});

}