import React from "react";


function ItemDetail(){

const myInit={
    method:'GET',
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
    
};

let myRequest = new Request("components/Json/ItemDetail.json",myInit)

fetch(myRequest)
    .then(response =>response.json())
    .then(data =>{
        let img = data['url'];
        let nombre = data['nombre'];
        let precio = data['precio'];
    })



return(
    <div className="Container">
        <div className="imgContainer">
            <img src={img} alt="" />
        </div>

        <h1>Producto: {nombre}</h1>
        <h3>Precio: {precio}</h3>
    </div>
    

);

}

export default ItemDetail