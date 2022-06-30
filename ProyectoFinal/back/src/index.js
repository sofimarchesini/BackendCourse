import express from 'express';
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import DBindexRoutes from './routes/DBindexRoutes.js'
import morgan from 'morgan';
import path from 'path';
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import Container from './Components/Container.js';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import {normalize, schema} from "normalizr";
dotenv.config();

//PARARSE EN BACK Y CORRER CON NPM START 

const cont = new Container("./src/data/productos.json")
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');

app.use('/productos', productRoutes);
app.use('/api/carrito', cartRoutes);
app.use('/api/DB', DBindexRoutes);

app.use('*', (req, res) => res.status(404).send("Parece que te has perdido"));


const messages = []
const products = []

//Probando data de MONGODB"
let URL_MONGO = "mongodb+srv://sofimarchesini:" + process.env.PASSWORD + "@cluster0.02dbrc3.mongodb.net/productos?retryWrites=true&w=majority"

const prods = new mongoose.Schema({
    nombre:{type:String}
})

mongoose.connect(URL_MONGO,{
    useNewUrlParser: true,
    UseUnifiedTopology:true
})

//Probando SOCKET
io.on('connection', (socket) =>{
    console.log('mostrando productos en tiempo real');
    socket.on('newProduct', product => {
        products.push(product)
        socket.emit('products',cont.getAll());
    })
})

const holding = {}

io.on('connection', (socket) =>{
    console.log('usuario conectado');
    
    socket.on('newMessage', data => {
        var date = new Date()
        data["date"] = date;
        messages.push(data);
        const mensajesSchema = new schema.Entity("messages");
        const mensajesSchemaNormalize = normalize(holding, mensajesSchema)
        socket.emit('messages',mensajesSchemaNormalize);
    })
})

httpServer.listen(8080, () => {console.log(`server started on port 8080`)})
