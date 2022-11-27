import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { cart, deleteOne, totalPrecio, deleteAll } = useContext(CartContext)

  if (cart.length === 0 ){
    return (
    <main>
      <h1 className='carritoVacío'>Aún no hay productos en el carrito, agregalos desde <Link to='/'>acá</Link></h1>
    </main>
  )}

  return (
    <main>
        <div className='prodAgregadoCabecera'>
          <h2 className='prodImgTitleCabecera'>Producto</h2>
          <h2 className='prodPrecioCabecera'>Precio</h2>
          <h2 className='prodCantidadCabecera'>Cantidad</h2>
        </div>
      {cart.map((prod)=>(
        <div key={prod.id} className='prodAgregado'>
          <section className='prodImgTitle'>
            <img src={prod.img} alt={prod.title} />
            <h3>{prod.nombre}</h3>
          </section>
          <section className='prodPrecio'>
            <h3>{(prod.precio) && `${prod.precio} U$S`}</h3>
          </section>
          <section className='prodCantidad'>
            <h3>{prod.cantidad}</h3>
            {(prod.id) && (<button onClick={()=>deleteOne(prod.id)} className='deleteOneBtn'>X</button>)}
          </section>
        </div>
      ))}
      <div className='finalizarCompra'>
        <h2 className='total'>Total: {totalPrecio()} U$S</h2>
        <Link to='/checkout'><button className='button'>Checkout</button></Link>
        <button onClick={deleteAll} className='deleteAllBtn'>Eliminar todos los productos</button>
      </div>
    </main>
  )
}

export default Cart