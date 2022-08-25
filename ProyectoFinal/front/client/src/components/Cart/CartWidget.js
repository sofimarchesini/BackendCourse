
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';
import {NavLink} from 'react-router-dom'


class CartWidget  extends Component{
    render(){
        return (
            <div >
                <NavLink to="/cart" exact>
                    <div className="cart-button"><i className="icon-header fas fa-shopping-bag"><FontAwesomeIcon icon={faShoppingCart} /></i></div>
                </NavLink>    
                
            </div>

        )
    }
}

export default CartWidget;
