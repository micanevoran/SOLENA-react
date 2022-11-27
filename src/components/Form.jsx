import React, { useState, useContext } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import { db } from '../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailVerif, setEmailVerif] = useState('')
    const [orderId, setOrderId] = useState('')

    const {cart, totalPrecio, deleteAll} = useContext(CartContext)

    const totalCarrito = totalPrecio()

    const enviarOrden = (e) =>{
        e.preventDefault()
        const objOrden = {
          buyer: {name, lastName},
          items: cart,
          total: totalCarrito,
          date: serverTimestamp()
        }
        const orderCollection = collection (db, 'orders')
        addDoc (orderCollection, objOrden)
        .then ((res)=>{
          setOrderId(res.id)
          deleteAll()
        })
        .catch ((error)=> console.log(error))
    }

    const handleName = (e) => {setName(e.target.value)
    console.log(name)}
    const handleLastName = (e) => setLastName(e.target.value)
    const handlePhone = (e) => setPhone(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleEmailVerif = (e) => setEmailVerif(e.target.value)

    if(orderId){
      return(
        <main className='compraFinalizada'>
          <h1>Gracias por tu compra</h1>
          <h2>Tu número de orden es {orderId}</h2>
        </main>
      )
    }

  return (
    <main className='checkoutScreen'>
        <h1 className='checkoutTitle1'>El total de tu compra es de {totalPrecio()} U$S</h1>
        <h2 className='checkoutTitle2'>Completa el formulario para finalizar la compra</h2>
        <form action="" onSubmit={enviarOrden} className='checkoutForm'>
            <input type="text" placeholder='Introduce tu Nombre' name='nombre' onChange={handleName} value={name}/>
            <input type="text" placeholder='Introduce tu Apellido' name='apellido' onChange={handleLastName} value={lastName}/>
            <input type="number" placeholder='Introduce tu Teléfono' name='teléfono' onChange={handlePhone} value={phone}/>
            <input type="text" placeholder='Introduce tu Email' name='email' onChange={handleEmail} value={email}/>
            <input type="text" placeholder='Verifica tu Email' name='emailVerif' onChange={handleEmailVerif} value={emailVerif}/>
            <button disabled={name === ''|| lastName === '' || phone === '' || email === ''|| email !== emailVerif} className='button'>Confirmar</button>
        </form>
    </main>
  )
}

export default Form