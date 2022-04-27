import './Counter.css';
import { useState, useEffect } from 'react';
// import { render } from 'react-dom';

function Counter(){
    const [count, setCount] = useState(0);
    const texto = document.getElementById('.text');


useEffect(() =>{
    console.log('Did mount', count);
    return ()=>{
        console.log('clean up', count);
    };
},[]);
console.log('Will mount', count);

return(
    <div className='counter'>
        <header className='counter-header'>
            <h1 className='text'>0</h1>
           
           
            <button onClick={()=>{
                setCount(count - 1) 
                texto.innerHTML = count}}
                >
                -
            </button>

            <button onClick={()=>{
                setCount(count + 1) 
                texto.innerHTML = count}}
                >
                +
            </button>
        </header>
    </div>
)

}