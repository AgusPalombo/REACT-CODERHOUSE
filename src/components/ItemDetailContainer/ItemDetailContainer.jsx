import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer(){

    return (
        <div className='container'>
            <h1>ContainerDetail</h1>
            <ItemDetail/>
        </div>
        
    );
}

export default ItemDetailContainer;