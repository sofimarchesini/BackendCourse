import React from 'react';
import ItemDetail from '../../pages/itemDetailPage/itemDetail';
import items from '../CardItem/CardData.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

    const {nameToNavigate} = useParams();
    console.log(nameToNavigate)
    const item = items.find(prod => prod.nameToNavigate ===nameToNavigate);

    return (
        <ItemDetail prod={item}/>
    )
}

export default ItemDetailContainer;