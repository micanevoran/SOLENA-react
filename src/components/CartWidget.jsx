import React from 'react'
import carrito from '../img/carrito.svg'

const CartWidget = () => {
  return (
    <img src={carrito} alt="carrito de compras" className='carritoImg'/>
  )
}

export default CartWidget