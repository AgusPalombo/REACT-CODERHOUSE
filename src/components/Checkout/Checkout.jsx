import {useState, useContext} from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {doc,getDoc} from "firebase/firestore";
import CartContext from '../../store/cart-context'; //PROBLEMA CON ESTE IMPORT
import { Link } from 'react-router-dom';
import swal from 'sweetalert';





const Checkout = () => {

  const db = getFirestore();

  const {cart,getTotalPrice} = useContext(CartContext) //EL IMPORT GENERA UN ERROR ACA POR ENDE EN EL .MAP

  const[load, setLoad] = useState(false)
  const[orderID, setOrderID] = useState(false)

  const[buyer, setBuyer] = useState(
      {
    Nombre:'',
    Email:'',
    Telefono:''
  });

  const{Nombre, Email, Telefono} = buyer

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
          console.log("order",order)
          console.log("order",order.id)
          setOrderID(order.id)
          setLoad(false)
      } catch (error) {
          
      }
  }

  const handleSubmit = (e) =>{
      
      e.preventDefault()
      const items = cart.map(e=> {return {id: e.id, title: e.title, price: e.price, quantity: e.quantity} }) //PROBLEMA CON ESTA LINEA
      const total = getTotalPrice()
      const data = {buyer, items, total}
      console.log("data", data)
      genateOrder(data)
      
  }

  return (
    <>
        <h1>Finalizando compra</h1>
        <hr />
        
        <div>
            <h4></h4>
            <br />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="Nombre" 
                    placeholder='Nombre'
                    value={Nombre}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <input 
                    type="phone" 
                    name="Telefono" 
                    placeholder='Telefono'
                    value={Telefono}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <input 
                    type="email" 
                    name="Email" 
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />

                <Link to="/" >
                <input
                    type="submit" 
                    value="Finalizar Compra" 
                    className='btn btn-success'
                />
                </Link> 
                
                </form>
            </div>
    </>

    
  )
}


export default Checkout
