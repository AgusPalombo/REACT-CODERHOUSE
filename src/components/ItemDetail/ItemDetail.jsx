import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    return (
    <div className='item-detail'>
        <div className='left'>
            <div className='img-detail-container'>
                <img src={ item?.imageUrl } alt='Imagen del producto' />
            </div>
        </div>
        <div className='right'>
            <div className='info-container'>
                <h2>{ item?.title }</h2>
                <p>{ item?.price }</p>
                <div className='count-container'>
                    <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                    <button onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
                    <button onClick={() => cartCtx.removeProduct(item.id)} >Remove product</button>
                    <button onClick={() => cartCtx.clear()} >Clear</button>
                    <button onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
                    <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
                    {cartCtx.products.length &&
                        <button onClick={() => console.log(cartCtx)}>
                            <Link to='/cart'>
                                Terminar compra ({ cartCtx.getCartQuantity() } items)
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail