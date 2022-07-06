import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("cookies");
});

router.post("/info", (req, res) => {
    console.log(req.body)
    res.cookie("nombre", req.body.nombre, { signed: true });
    res.cookie("apellido", req.body.apellido);
    res.send('Informacion guardada con éxito');
});

router.get("/tabla", (req, res) => {
    let cookies = "";
    for (let key in req.cookies) {
        cookies += `<tr><td>${key}</td><td>${req.cookies[key]}</td></tr>`;
    }
    res.send(`<table>${cookies}</table>`);
});

router.get("/ver", (req, res) => {
    res.send({'firmadas':req.signedCookies, 'no firmadas':req.cookies});
});

router.delete("/borrar/:cookie_key", (req, res) => {
    if(req.signedCookies[req.params.cookie_key] || req.cookies[req.params.cookie_key]){
    res.clearCookie(req.params.cookie_key);
    res.send('Cookie borrada');
    }else{ res.send('No existe la cookie'); }
});

export default router;