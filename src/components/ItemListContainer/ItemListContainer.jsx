import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


function ItemListContainer(){
    return (
        <div className='container'>
            <h1>Container</h1>
            <ItemCount/>
        </div>
        
    );
}

export default ItemListContainer;