
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './formPage.css';
import Formulario from '../../components/Form/Form.js'
import { useParams } from 'react-router-dom';
import items from '../../components/CardItem/CardData.js';
import IniciarSesion from '../../components/Form/IniciarSesion';
import Registracion from '../../components/Form/Registracion';

const Compra = () =>{

    return (
        <div>
            <IniciarSesion/>
            <Registracion/>
        </div>
    )
}

export default Compra;