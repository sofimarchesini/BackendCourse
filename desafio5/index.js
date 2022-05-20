import express from 'express';
import productRoutes from './routes/productRoutes.js'
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('/public'));
app.use('/productos',productRoutes);

app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(8080, () => {console.log(`server started on port 8080`)})

server.on('error', (err) => console.log(err));