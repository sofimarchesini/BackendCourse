import express from 'express';
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import DBindexRoutes from './routes/DBindexRoutes.js'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import session from "express-session";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import mongoose from 'mongoose';
import './utils/passport.js';
import passport from "passport";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from './GraphQl/schema.js'


dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');

const connection =  await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true});                                    
const url =`${connection.connection.host}:${connection.connection.port}`; 

app.use(session(
    {
        secret: 'contraseña',
        resave: true,
        saveUninitialized: true,
    }
));
app.use(cookieParser('secret'));

//middlewares

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(`${process.env.PORT}`));
app.use(cookieParser());

//Routes I am using now
app.use('/', userRoutes)
app.use('/api/carrito', cartRoutes)
app.use('/productos', productRoutes)
app.use ('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

/**app.use('/productos', productRoutes);
app.use('/api/carrito', cartRoutes);
app.use('/api/DB', DBindexRoutes);
app.use("/api", routerRandom);
app.use("/", sessionRoute);
app.use("/", cookiesRoute);**/
app.use('*', (req, res) => res.status(404).send("Parece que te has perdido"));

export default app;
