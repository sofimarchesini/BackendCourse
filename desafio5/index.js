import express from 'express';
import productRoutes from './routes/productRoutes.js'

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(8080, () => {console.log(`server started on port 8080`)})

server.on('error', (err) => console.log(err));