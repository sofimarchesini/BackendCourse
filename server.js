import express from 'express';
import http from 'http';

const app = express();

const server =  http.createServer((req,res) =>{
    res.end("Hola soy un servidor")
})

const PORT = process.env.PORT  || 8080;

server.listen(PORT,() =>{
    console.log("Servidor en Puerto 8080")
})


/**app.get('/productos',(req,res)=>{

})


app.get('/productoRandom',(req,res)=>{
    
})*/
