import React from 'react';
import './Cart.css';

function CartItem(props){
    return (
        <div className="cart-item"> 
        <div className='row'>
            <div className='col-5'>
                <img className="image-item" src={props.src} alt="product" />
            </div>
            
            <div className=" col-6">
                <h4 className="name-cart-item">{props.title}</h4>
                <h5 className="price-cart-item">${props.price}</h5>
            </div>

        </div>
        </div>
    );
}

export default CartItem;