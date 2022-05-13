import express from 'express';
import productRoutes from './routes/productRoutes.js'

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', productRoutes);


const server = app.listen(8080, () => {console.log(`server started on port 8080`)})

server.on('error', (err) => console.log(err));