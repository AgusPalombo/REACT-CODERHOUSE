import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <h1>DUNK</h1>
            <ul className='nav'>
                <a href="#">NBA</a>
                <a href="#">Hombre</a>
                <a href="#">Mujer</a> 
                <CartWidget/>
            </ul>  
        </div>
    );
}

export default NavBar;