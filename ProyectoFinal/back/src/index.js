import express from 'express';
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import morgan from 'morgan';
import path from 'path';
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import Container from './Components/Container.js';

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



const messages = []
const products = []

io.on('connection', (socket) =>{
    console.log('mostrando productos en tiempo real');
    socket.on('newProduct', product => {
        products.push(product)
        socket.emit('products',cont.getAll());
    })
})


io.on('connection', (socket) =>{
    console.log('usuario conectado');
    
    socket.on('newMessage', data => {
        var date = new Date()
        data["date"] = date;
        messages.push(data);
        socket.emit('messages',messages);
    })
})



httpServer.listen(8080, () => {console.log(`server started on port 8080`)})
//httpServer.on('error', (err) => console.log(err));