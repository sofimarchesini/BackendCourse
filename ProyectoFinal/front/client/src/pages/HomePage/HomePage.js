import React from 'react';
import ItemListContainer from '../../components/Container/itemListContainer.js';
import Home from '../../components/Home/home.js';

const HomePage = () =>{
    return (
        <div>
            <Home/>
            <ItemListContainer/>
        </div>
    )
}

export default HomePage;