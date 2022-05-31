import { useContext } from 'react';
import { context } from '../context/cartContext'
import {useNavigate} from "react-router-dom";

import React from 'react';
import './CardItem.css';
import '../Cart/Cart.js';



const CardItem = (props) =>{
    //const { addToCart} = useContext(context)
    const navigate = useNavigate();
    return (
        <div className="card-item container" > 
            <div id={props.id} >
                <div className='row-1' >
                    <img className="woman-img" src={process.env.PUBLIC_URL+props.src} alt=""/>
                </div>
            </div>    
            <div className='row-2'>
                <div className="name">
                    <p onClick={() => navigate(`/${props.nameToNavigate}`)} >{props.title}</p>
                </div>
                <p className="price">${props.price}</p>
            </div>
        </div>  
    );
}

export default CardItem;