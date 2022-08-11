import express from 'express';
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import DBindexRoutes from './routes/DBindexRoutes.js'
import morgan from 'morgan';
import path from 'path';
import { createServer } from "http";
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerRandom from './routes/randomRoutes.js'
import session from "express-session";
import sessionRoute from "./routes/session.js";
import cookieParser from "cookie-parser";
import cookiesRoute from "./routes/cookies.js";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }
));
app.use(cookieParser('secret'));

//middlewares
app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');

//Routes
app.use('/productos', productRoutes);
app.use('/api/carrito', cartRoutes);
app.use('/api/DB', DBindexRoutes);
app.use("/api", routerRandom);
app.use("/", sessionRoute);
app.use("/", cookiesRoute);
app.use('*', (req, res) => res.status(404).send("Parece que te has perdido"));

export default app;
