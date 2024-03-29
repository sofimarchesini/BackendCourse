import { Router } from "express";
const usuarios = [];
const router = Router();

router.get("/registro", (req, res) => {
    res.render("SessionCookies/registro");
});

router.get('/',(req,res)=>{res.render("SessionCookies/login")})

router.post('/registro',(req,res)=>{
    if(usuarios.some(user=>user.nombre===req.body.nombre)){
        return res.render('SessionCookies/errorRegistro.ejs')
    }
    usuarios.push(req.body)
    res.render('SessionCookies/login')
})

router.post('/login',(req,res)=>{
    const {nombre,password} = req.body
    const usuario  = usuarios.find(usuario=>usuario.nombre===nombre)
    if(usuario && usuario.password===password){
        for (const key in req.body) {
            req.session[key] = req.body[key]  
        }
        res.redirect('/datos')
    } else res.render('SessionCookies/errorLogin')
})

router.get('/datos',(req,res)=>{
    if(req.session.nombre){
        res.render('SessionCookies/bienvenida/index.ejs',{nombre:req.session.nombre})
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{res.redirect('/')})
})


export default router