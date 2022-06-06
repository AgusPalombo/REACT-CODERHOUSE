import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

function getItem(id) {
  const db = getFirestore();

  const itemRef = doc(db, 'items', id);

  return getDoc(itemRef);

   
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(snapshot => {
                setItem({ ...snapshot.data(), id: snapshot.id });
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer