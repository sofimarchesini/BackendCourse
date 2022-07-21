import yargs from 'yargs';
import  app from "./app.js";
import http from "http";
import {hideBin} from "yargs/helpers";

yargs(hideBin(process.argv)).command({
  command: "add port",
  describe: "add number of port",
  builder: {
    PORT: {
      describe: "number of port",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    console.log(`PORT is: ${argv.PORT}`);
  },
}).parse();


const PORT =  8000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor listo en el puerto ${PORT} `);
});

