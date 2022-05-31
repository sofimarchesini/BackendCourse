
import {useState} from "react";
import { useContext } from 'react';
import { context } from '../context/cartContext'
import {Link} from 'react-router-dom';
import './counter.css';


const  Counter = (props) => {

  let [counter,setCounter] = useState(1);

  function prodIncr(){
    setCounter(counter+1);
  }

  function prodDecr(){
      if(counter===1) return; 
      setCounter(counter-1);
    }


  return (
    <div className="counter-cont">
      <div className="cont-buttons">
      <div className="button-inc">
          <button 
            onClick={() => prodDecr()}
            className=" btn btn-secondary btn-xl "
          >
            -
          </button>
        </div>
        <span className="number-counter">{counter}</span>
        <div className="button-dec">
          <button
            onClick={() => prodIncr()}
            className="btn btn-btn btn-secondary btn-xl "
          >
            +
          </button>
          </div>
      </div>
      <div className="mt-3"><Link to= '/cart' style={{ textDecoration: 'none' }}><button  onClick={() => {props.onAdd(counter,props.prod)}} className= " button-add " ><p className="carrito-title">Add to Cart</p></button><br/></Link></div>

    </div>
    
  );
}

export default Counter;