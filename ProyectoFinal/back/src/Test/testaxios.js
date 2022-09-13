import axios from 'axios';
axios.defaults.baseURL ='http://localhost:8080/productos';

let id;

async function Pruebas(){
    PruebaMostrar()
    PruebaCrear();
    PruebaActualizar();
    PruebaBorrar()
}

async function PruebaMostrar(){
    try{
        const res = await axios.get('/list');
        if(Array.isArray(res.data.products)) {console.log('Done')
        }else{ console.log('No se pudieron leer los productos')}
    }catch(error){ console.log(`${error}`)}
}

async function PruebaBorrar() {
    try {
      const res = await axios.delete(`/delete/${id}`);
      const { name, description, code, img, price, stock, _id } =
      res.data.product;
      if (name && description && code && img && price && stock && _id) {id = _id;}
      else{console.log("error");}
    }catch(error){ console.log(`${error}`);}
}
  

async function PruebaCrear(){
    try{
        const res = await axios.get('/create', {
            name: 'Vintage',
            description: 'Bolso Amarillo',
            code: '123',
            img: 'img1',
            price: 44,
            stock: 3,
        });
        const {name, description, code, img, price, stock, _id} = res.data.product;
        if(name && description && code && img && price && stock && _id){id = _id;}
        else{console.log("error");}
    }catch(error){ console.log(`${error}`);}
}

async function PruebaActualizar() {
    try {
      const res = await axios.put(`/update/${id}`, {
        name: 'Vintage',
        description: 'Bolso Amarillo',
        code: '123',
        img: 'img1',
        price: 44,
        stock: 3,
      });
      const { name, description, code, img, price, stock, _id } = res.data.product;
      if (name && description && code && img && price && stock && _id) {id = _id;}
        else{console.log("error");}
    }catch(error){ console.log(`${error}`);}
  }

Pruebas()