import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



function getProducts(category) {
  const db = getFirestore();

  const itemsCollection = collection(db , 'items'); 

  const q = category && query(
    itemsCollection,
    where('category', '==', category) 
  );

  return getDocs(q || itemsCollection);
  
  
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc =>{
          return { ...doc.data(), id: doc.id }
        }));
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error, revisar la consola!');
      });
  }, [categoryId]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
    </div>
  )
}

export default ItemListContainer