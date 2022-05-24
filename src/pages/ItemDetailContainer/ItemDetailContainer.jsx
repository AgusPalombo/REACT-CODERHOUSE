import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Zapatillas AF1 Shadow',
                price: 25000,
                stock: 5,
                category: 'zapatillas',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/37d2e58a-eff1-4264-8007-876fc894637e/air-force-1-07-zapatillas-J29nBv.png'
              },
              {
                id: 2,
                title: 'Zapatillas AJ1',
                price: 23400,
                stock: 4,
                category: 'zapatillas',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7f4b382-6ecb-4a75-812a-322d9fc60317/air-jordan-1-mid-se-zapatillas-nino-a-Z7Rh1B.png'
              },
              {
                id: 3,
                title: "Camiseta Miami Heat city edition Tyler Herro '14'",
                price: 9000,
                stock: 5,
                category: 'remeras',
                imageUrl: 'https://images.footballfanatics.com/miami-heat/miami-heat-nike-city-edition-swingman-jersey-tyler-herro-youth_ss4_p-13300352+u-ukt7spppsrkesif7kqc5+v-c450a264cd4d4e949cbc315c28240e22.jpg?_hv=1&w=900'
              },
              {
                id: 4,
                title: "Camiseta Lakers Mamba edition Lebron James '23'",
                price: 12000,
                stock: 5,
                category: 'remeras',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/019acd9b-fd80-4ddd-902d-4b96e28a0671/lebron-james-lakers-camiseta-de-la-nba-swingman-HFQS0T.png'
              },
              {
              id: 5,
                title: "Camiseta Golden State Warriors Local Stephen Curry '30'",
                price: 10000,
                stock: 7,
                category: 'remeras',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/66a390cc-5540-48d7-a1e8-5e1bbb5ae16f/warriors-icon-edition-camiseta-nba-swingman-nino-a-22VQBL.png'
              },
              {
                id:6,
                title:"Nike Air Max Excee Zapatillas - Hombre",
                price:27000,
                stock:"7",
                category:"zapatillas",
                imageUrl:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lddanijntooidcnakfzc/air-max-excee-zapatillas-st8Vwj.png"
              }
        ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 500);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
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