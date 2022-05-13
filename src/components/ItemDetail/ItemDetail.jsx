import React, { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ItemCount from '../ItemCount/ItemCount';

import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleOnAdd = (count) =>{ 
        setCantidad(count) 
        console.log(`Se agregaron ${cantidad} de items del producto ${item.name}`)
        };

    return (
        <div className='container detailsStyle'>
            <h1 className='text-center titleStyle' >{item.name}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={item.img} className='rounded mx-auto d-block img_med' alt={item.nombre} />
                </div>
                <div className='col'>
                    <h3>DESCRIPCION:</h3>
                    <p>{item.description}</p>
                    <br />
                    
                    <h3>PRECIO: {item.price}</h3>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    
                    <div className="count-container">
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler}/>

                        <button onClic={()=> console.log(cartCtx.products)}>Imprimir Carrito</button>

                        <button onClick={()=> cartCtx.removeProduct(item.id)}>Remove Product</button>

                        <button onClick={()=> cartCtx.clear()}>Clear</button>

                        <button onClic={()=> console.log(cartCtx.isInCart(item.id))}>Is in cart</button>

                        <button onClic={()=> console.log(cartCtx.getCartQuantity())}>Quantity</button>

                        {cartCtx.products.length &&
                            <button onClick={()=> console.log(cartCtx)}>
                                <Link to='/cart'>
                                    Terminar Compra ({cartCtx.getCartQuantity()} items)
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