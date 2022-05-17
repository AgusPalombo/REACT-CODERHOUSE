import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
  return (
    <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + item?.id}>
              <button>Ver Detalle</button>
            </Link>
        </div>
        <div className='footer'>{ item?.price }</div>
    </div>
  )
}

export default Item