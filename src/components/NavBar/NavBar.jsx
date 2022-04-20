import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <h1>DUNK</h1>
            <ul className='nav'>
                <a href="#">NBA</a>
                <a href="#">Hombre</a>
                <a href="#">Mujer</a>
            </ul>  
        </div>
    );
}

export default NavBar;