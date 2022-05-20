import express from 'express';
import productRoutes from './routes/productRoutes.js'
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = 8000;

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');

app.use('/productos', productRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(8080, () => {console.log(`server started on port 8080`)})

server.on('error', (err) => console.log(err));