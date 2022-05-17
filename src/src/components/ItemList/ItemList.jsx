import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({ items }) {
    return (
        <div className='item-list'>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList