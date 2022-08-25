import nodemailer from "nodemailer";
import "dotenv/config";
import twilio from "twilio";
import { Router } from "express";
import User from "../schemas/UserSchema.js"
import multer from '../utils/multer.js';
import passport from "passport";

import dotenv from "dotenv";
dotenv.config();
const router = Router();

router.get("/", (req, res) => {
    res.render("SessionCookies/registro");
  });
  
router.post("/registro",  multer.single('photo'), async (req, res) => {
    const { nombre, apellido, email, password, telefono, mensaje } = req.body;
    const newUser = new User({nombre, apellido, email, password, telefono, mensaje});
    //newUser.photo = req.file.filename;
    newUser.cart = [];

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.user,
            pass: process.env.PASSWORD
        }
    });
    
    await transporter.sendMail( {
        from:'"Sofi"',
        to: email,
        subject: "Confirmacion de cuenta",
        html: `
          <h1>Hola ${nombre}</h1> 
          <p>Gracias por registrarte</p>`
    });
    
    try{
        await newUser.save();
        res.redirect('/login');
    }catch(error){
        console.log(`Error al crear el usuario: ${error}`);
    }

    const twilioAccount = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );
    twilioAccount.messages.create({
        body: "Hello from Twilio!",
        to: "whatsapp+18787897529",
        from: "whatsapp+18787897529", 
    });
});

router.post(
    '/login',
     passport.authenticate('local', {
        failureRedirect: '/errorLogin',
        successRedirect: '/'
     }),
);

router.get('/registro', (req, res) => {
    res.render("SessionCookies/registro");
});

router.get('/login', (req, res) => {
    res.render('SessionCookies/login');
});

router.get('/login-error', (req, res) => {
    res.render('SessionCookies/errorLogin');
});

router.get('/profile', (req, res) => {
    const user = req.user;
    res.render('profile', {user});
});

router.get('/logout', (req, res) => {
    req.session.destroy(err=>{res.redirect('/')})
});

export default router;