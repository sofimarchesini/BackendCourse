const Container = require('./Container.js')

const express = require("express");

const app = express();

const cont = new Container('productos.json')

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.send("En el /productos se veran  los productos y en /productoRandom uno de los productos elegido al azar")
});


app.get('/productos', (req,res)=>{
  console.log("mostrando productos")
  res.send( cont.getAll())
})


app.get('/productoRandom',(req,res)=>{
    res.send(cont.getAll()[Math.floor(Math.random() * cont.getAll().length)])
})

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});