import React, {useState} from 'react'

const Contador = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)
    const sumar = () => (cantidad < stock) && setCantidad(cantidad+1)
    const restar = () => (cantidad > 1) && setCantidad(cantidad-1)

    return (
        <div className='contador'>
            <p>{cantidad}</p>
            <button disabled={cantidad === 1} onClick={restar}>-</button>
            <button disabled={cantidad === stock} onClick={sumar}>+</button>
        </div>
    )
}

export default Contador