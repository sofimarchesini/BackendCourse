import express  from "express";
import cookieParser from "cookie-parser";
import cookiesRoute from "./src/routes/cookies.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.set('views',path.join(__dirname, 'views/SessionCookies' ));
app.set('view engine', 'ejs');
app.use("/", cookiesRoute);

const PORT = 8080;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); } );