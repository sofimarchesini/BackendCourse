
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './CardItem/CardItem.css';
import CardItem from './CardItem/CardItem.js';
import items from './CardItem/CardData.js';
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';;

const ItemList = ()=>{
    
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;
    const dispatch = useDispatch();

    const a = 'A';
    const listProducts = (
      ) => async (dispatch) => {
        try {
          dispatch({ type: a });
          const { data } = await axios.get(
            '/api/products'
          );
          dispatch({ type: a, payload: data });
        } catch (error) {
          dispatch({ type: a, payload: error.message });
        }
      };
    
      useEffect(() => {
        dispatch(listProducts());
        return () => {
          //
        };
      }, []);



  return(
      <div id="woman-initial-section" className="woman-section">
        <div>
          <FontAwesomeIcon icon="fa-thin fa-bars-filter" />
        </div>
        <div className="grid-container-woman">
          {(products).map((prod) => {
              return (
                <CardItem
                  item={prod}
                  src={prod.image}
                  title={prod.title} 
                  price={prod.price}
                  id={prod.id}
                  
                  />
              )
            }
          )}
        </div>
      </div>    
    );
}

export default ItemList;