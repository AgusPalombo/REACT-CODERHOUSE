import { useEffect } from 'react';
import './ItemCount.css';


const stock = 5;
const initial = 0;

// HOLA RODRIGO NO ENTENDI BIEN LA PARTE DE onAdd. Seria la funcion que se encarga de agregar todo al carrito?


function ItemCount(stock,initial){
    const [count,setCount]=useEffect(0);
    
    const incrementar = () => {

        if(count<stock){

            setCount(count + 1);

        } 

    }

    const decrementar = () => {

        if(count>initial){

            setCount(count - 1);

        } 

    }
return(
    <div className='counter'>
        <header className='counter-header'>
           <div className='ItemCountContainer'>
             <h1 className='text'>{count}</h1>

             <div className='buttonsContainer'>
                <button onClick={()=>{decrementar()}}>-</button>

                <button onClick={()=>{incrementar()}}>+</button>
             </div>
           </div>
           

}
        </header>
    </div>
)

}

export default ItemCount;