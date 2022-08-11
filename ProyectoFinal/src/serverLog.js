import express from "express";
import os from "os";
import compression from "compression";
import winston from "winston";

const PORT =  8080;
const app = express();

const loggerWarn = winston.createLogger({
  level: "warn",
  transports: [ new winston.transports.File({ filename: "warn.log", level: "warn" }), ],
});

const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console({ level: "info" })],
  });

const loggerError = winston.createLogger({
  level: "error",
  transports: [ new winston.transports.File({ filename: "error.log", level: "error" }),],
});

app.set("views", "./views/errors");
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/info", compression(), (req, res) => { 
  const data = {
    system: process.platform,
    version: process.version,
    memory: process.memoryUsage.rss(),
    path: process.execPath,
    id: process.pid,
    folder: process.cwd(),
    cpu: os.cpus().length,
  };

  res.render("index", {
    system: process.platform,
    version: process.version,
    memory: process.memoryUsage.rss(),
    path: process.execPath,
    id: process.pid,
    folder: process.cwd(),
    cpu: os.cpus().length,
  });
});

app.get("*", (req, res) => {
  logger.log("warn", "ruta inexistente");
  loggerWarn.log("warn", "Ruta inexistente");
  res.render("error", { message: "La ruta especificada no existe",});
});

app.listen(PORT, () => {
  logger.log("info", `Server on port ${PORT}...`);
});