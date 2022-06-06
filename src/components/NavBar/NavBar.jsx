import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

function getCategories() {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');
    return getDocs(itemsCollection)
}


function NavBar(props) {

    // const[categories, setCategories] = useState([]);

    // useEffect(()=>{
    //     getCategories()
    //         .then(snapshot => {
    //             const categories = snapshot.docs.map(doc => doc.data().category);
    //             setCategories(categories);
    //         })
    // }, []);

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