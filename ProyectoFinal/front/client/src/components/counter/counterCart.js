
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
            className="button-inc btn btn-secondary btn-xl p-2"
          >
            -
          </button>
        </div>
        <span>{counter}</span>
        <div className="button-dec">
          <button
            onClick={() => prodIncr()}
            className="btn btn-secondary btn-xl"
          >
            +
          </button>
          </div>
      </div>

    </div>
    
  );
}

export default Counter;