import express  from "express";

const router = express.Router();

router.get("/randoms", (req, res) => {
  res.send("randoms");
});

router.get("/info", (req, res) => {
    
    const argumentosDeEntrada = process.argv
    const sistemaOperativo= process.platform;
    const nodeVersion = process.version;
    const memoriaTotalReservada= process.memoryUsage.rss();
    const pathDeEjecucion =  process.execPath;
    const processId = process.pid;
    const carpetaDeProyecto = process.cwd();

    res.send(`
    <h2>argumentosDeEntrada: ${argumentosDeEntrada }</h2>
    <h2>sistemaOperativo: ${sistemaOperativo}</h2>
    <h2>nodeVersion: ${nodeVersion}</h2>
    <h2>memoriaTotalReservada: ${memoriaTotalReservada}</h2>
    <h2>pathDeEjecucion: ${pathDeEjecucion}</h2>
    <h2>processId: ${processId}</h2>
    <h2>carpetaDeProyecto: ${carpetaDeProyecto }</h2>`);
});


export default router;