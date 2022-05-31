import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import Cart from './components/Cart/Cart.js';
import Footer from './components/footer/footer.js';
import CustomProvider from './components/context/cartContext.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contactPage/contact.js';
import About from './pages/aboutPage/about.js';
import ItemDetailContainer from './components/Container/ItemDetailContainer.js';
import ItemListContainer from './components/Container/itemListContainer.js';
import Compra from './pages/formPage/formPage';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import iniciarSesion from './components/Form/IniciarSesion.js';
import IniciarSesion from './components/Form/IniciarSesion.js';
import ItemList from './components/itemList.js'

library.add(fas, faTwitter, faFontAwesome)


function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
          <NavBar/>
          <Routes path="/">
            <Route path="/products" element={<ItemList/>}/>
            <Route index element={<HomePage/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path=":nameToNavigate" element={<ItemDetailContainer/>}/>
              <Route path="about"  element={<About/>}/>
              <Route path="contact"  element={<Contact/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route  path="/cart/pago" element={<Compra/>}/>
              <Route path="/iniciarSesion" element={<IniciarSesion/>}/>
          </Routes>
          <Footer/>

      </CustomProvider> 
    </BrowserRouter>
     );
}

export default App;
