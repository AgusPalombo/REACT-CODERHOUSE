import React,{useState, useContext} from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {doc,getDoc} from "firebase/firestore";
import CartContext from '../../store/cart-context'; //PROBLEMA CON ESTE IMPORT
import { Link } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import swal from 'sweetalert';



export const Checkout = () => {

  const db = getFirestore();

  const {getTotalPrice, clear, products} = useContext(CartContext) //EL IMPORT GENERA UN ERROR ACA POR ENDE EN EL .MAP

  const[load, setLoad] = useState(false)

  const[orderID, setOrderID] = useState(false)

  const[buyer, setBuyer] = useState(
      {
    Nombre:'',
    Email:'',
    Telefono:''
  });

  const{nombre, email, telefono} = buyer

  const handleInputChange = (e)=> {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
  }


  const genateOrder = async (data)=>{
    setLoad(true)
      try {
          const col = collection(db,"Orders")
          const order = await addDoc(col,data)
          setOrderID(order.id)
          clear()
          setLoad(false)
      } catch (error) {
          console.log(error)
      }
  }

  const handleSubmit = (e) =>{
      
      e.preventDefault()
      const items = products.map(e=> {return {
        id: e.id,
        title: e.title,
        price: e.price, 
        quantity: e.quantity
        } }) //PROBLEMA CON ESTA LINEA

      const total = getTotalPrice()
      const data = {buyer, items, total}
      console.log("data", data)
      genateOrder(data)
      
  }

  return (
    <div>
        <h2>Finalizando Compra</h2>
        
            {load ? <Spinner animation='border'></Spinner> :   
            (!orderID && 
                <div>
                    <h6>Completar Datos</h6>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="Nombre" 
                            placeholder='Nombre'
                            value={nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input 
                            type="phone" 
                            name="Telefono" 
                            placeholder='Telefono'
                            value={telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input 
                            type="email" 
                            name="Email" 
                            placeholder='Email'
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />

                        
                        <input
                            type="submit" 
                            value="Finalizar Compra" 
                        />
                        
                        
                    </form>
                </div>)}

            <div>
                {orderID &&
                (<div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                    <h4 className='text-center text-success'>Compra finalizada con éxito</h4>
                    <hr width={100} />
                    <h5 className='text-center'>Su Código de compra es: <span className='text-info'>{orderID}</span></h5>
                    <h6>¡Gracias por su compra!</h6>
                    <Link to="/"><button className='btn btn-primary'>Regresar a la tienda</button></Link>
                </div>)}
            </div>
    </div>
  
  )
}


export default Checkout
