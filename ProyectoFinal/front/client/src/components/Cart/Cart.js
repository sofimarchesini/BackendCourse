
import { useContext } from 'react';
import { context } from '../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Counter from '../counter/counterCart';
import Compra from '../../pages/formPage/formPage';

import {useNavigate} from "react-router-dom";


const cartDOM = document.querySelector(".cart");

const Cart = () =>{

    const { cart, clearCart, sumQuantity, removeFromCart, addToCart, subTotal, freshTotal} = useContext(context)
    const navigate = useNavigate();

    const onAdd = (counter,prod) => {
        prod.quantity = counter
        addToCart(prod)
    }
    

    return (
        <>
        {sumQuantity()>0 ?
        <>
        <div className="cart-overlay  container-fluid">
            <div className="cart">
                <h2>Cart</h2>
                <div className='cart-cont'>
                    {cart.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <CartItem item={prod}
                                src={prod.image}
                                title={prod.name} 
                                price={prod.price} 
                                id={prod.id}
                                quantity={prod.quantity}/>
                                <div onClick={()=>removeFromCart(prod)}>
                                    <Button  className="remove-button">remove</Button>
                                </div>
                        </div>
                    )
                })}
                </div>
                <div className="cart-content"></div>
                    <div className="cart-footer">
                        <h3>your total : $<span className="cart-total">{freshTotal()}</span></h3>
                        <button onClick={() => clearCart()} className="clear-cart banner-btn">clear cart</button>
                    </div>
                    <div className="close-cart">
                    <NavLink to="/"  style={{ textDecoration: 'none',color: 'black'}}>
                        <i className="icon-close" ><FontAwesomeIcon icon="fa-solid fa-rectangle-xmark"/>Go back</i>
                    </NavLink>
                    </div>
                    <div className='button-pay-cont'>
                        <div className='button-link'> <a style={{ textDecoration: 'none',color: 'black'}} className="button-link-a"  onClick={() => navigate("/cart/pago")}>Pay here</a> </div>
                    </div>
                </div>
        </div>
        </>
        :
        <div>
            <p className='empty-cart'>No hay nada en el carrito</p>
            <div  className="empty-cart-button">
                <NavLink to="/" style={{ textDecoration: 'none',color: 'black'}}>
                    <i  ><FontAwesomeIcon icon="fa-solid fa-rectangle-xmark"/>Go Shop</i>
                </NavLink>
                </div>
        </div>
            }
        </>
    )
    
}

export default Cart;