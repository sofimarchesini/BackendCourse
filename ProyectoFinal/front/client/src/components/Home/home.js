
import React from 'react';
import '../CardItem/CardItem.css';
import './home.css';


const Home = () =>{
    return(
        <div className="home-section center container-fluid">  
            <div className="row">
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className='img-home-cont'>
                        <img className='img-home' src={process.env.PUBLIC_URL+"img/L41A2102009-06.jpg"} alt=""/>
                    </div>
                    </div>
                <div className='col-2'></div>

            </div>
            <div className='cont_title-2 center '>
                <p className='title-2'>SHEININ KINHA</p>
            </div>
        </div>
    );
}

export default Home;