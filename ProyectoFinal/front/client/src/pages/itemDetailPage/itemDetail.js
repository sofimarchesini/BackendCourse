import React from 'react';
import { useContext } from 'react';
import { context } from '../../components/context/cartContext';
import './itemDetail.css';
import Counter from '../../components/counter/counterDetail.js';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



const ItemDetail = (props) =>{
    
    const { addToCart,freshTotal,prodIncr,prodDecr,cart} = useContext(context)

    const onAdd = (counter) => {
        props.prod.quantity = counter
        addToCart(props.prod)
    }

    return(
        <div >
            <div class="container-fluid section">
                <div className='row-principal'></div>
                <div class="row">
                    <div className="col-3">

                    </div>
                    <div className="col-4">
                        <div className='img-detail-cont'>
                            <img className="img-detail" src={props.prod.image} alt="product" />
                        </div>  
                    </div>
                    <div className="col-3">
                        <div className='row'>
                            <h4 className="name-item">{props.prod.name}</h4>
                        </div>
                        <div className='row'>
                            <p className='detail-text'>{props.prod.description}</p>
                        </div>
                        <div className='row'>
                            <strong className="price-item">${props.prod.price}</strong>
                        </div>
                        <div className=' row  ' > 
                            <Counter prod={props.prod} onAdd={onAdd} />
                        </div>
                        <div className='row'>
                            <div className=''>
                                <Link to="/" style={{ textDecoration: 'none' ,border: 'none'}}>
                                    <Button style={{ textDecoration: 'none' ,border: 'none'}} className='butt'>Go back</Button>
                                </Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
            
    );
    
}

export default ItemDetail;