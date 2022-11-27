import React, { useContext } from 'react'
import carrito from '../img/carrito.svg'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext)

  return (
    <div>
      <img src={carrito} alt="carrito de compras" className='carritoImg'/>
      <span className={totalUnidades() !== 0 ? 'unidadesCarrito' : undefined}>{totalUnidades() !== 0 && totalUnidades()}</span>
    </div>
  )
}

export default CartWidget