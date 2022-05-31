
import React, { useEffect, useState } from 'react';
import '../CardItem/CardItem.css';
import CardItem from '../CardItem/CardItem.js';
import items from '../CardItem/CardData.js';
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';



const ItemListContainer = ()=>{

  const [items2,setItems] = useState([]);
  const {category} = useParams();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => (resolve(items)), 2000);})
    }

    useEffect(() => {
      getProducts().then((a)=>setItems(a))
    },[]);

  
  const getProductsWithAsyncAwait = async () => {
     try {
        const result = await getProducts();
     } catch (error) {
          console.error("Ha habido un error:", error);
      }
    };

  getProductsWithAsyncAwait();


  console.log(items);
  return(
      <div id="woman-initial-section" className="woman-section">
        <div>
          <FontAwesomeIcon icon="fa-thin fa-bars-filter" />
        </div>
        <div className="grid-container-woman">
          {(items).map((prod) => {
              return (
                <CardItem
                  item={prod}
                  src={prod.image}
                  title={prod.name} 
                  price={prod.price}
                  id={prod.id}
                  nameToNavigate={prod.nameToNavigate}
                  />
              )
            }
          )}
        </div>
      </div>    
    );
}

export default ItemListContainer;