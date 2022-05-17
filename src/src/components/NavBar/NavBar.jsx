import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt="DUNK Clothes"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/zapatillas' className={nav => nav.isActive ? 'nav-active' : ''}>Zapatillas</NavLink></li>
                <li><NavLink to='/category/remeras' className={nav => nav.isActive ? 'nav-active' : ''}>Remeras</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;