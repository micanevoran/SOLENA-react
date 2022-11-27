import React, {useState} from 'react'

const Contador = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(1)
    const sumar = () => (cantidad < stock) && setCantidad(cantidad+1)
    const restar = () => (cantidad > 1) && setCantidad(cantidad-1)

    return (
        <div>
            <section className='contador'>
                <p>{cantidad}</p>
                <button disabled={cantidad === 1} onClick={restar}>-</button>
                <button disabled={cantidad === stock} onClick={sumar}>+</button>
            </section>
            <button className='addProd' onClick={()=>onAdd(cantidad)}>
                Agregar al Carrito
            </button>
        </div>
    )
}

export default Contador