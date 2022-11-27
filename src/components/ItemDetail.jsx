import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Contador from './Contador'
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    
    const {addToCart} = useContext(CartContext) 

    const [show, setShow] = useState(true)
    
    const onAdd = (qty) => {
        setShow(false)
        addToCart(item, qty)
    }

    return (
        <div className='itemDetail'>
            <img src={item.img} alt={item.nombre}/>
            <article>
                <h2>{item.nombre}</h2>
                <p>{item.description}</p>
                <h3>U$S {item.precio}.-</h3>
                {show ? (
                    <div>
                        <p>Seleccione la Cantidad</p>
                        <Contador stock={item.stock} onAdd={onAdd}/>
                    </div>
                ) : (
                    <div className='seguirComprando'>
                        <Link to="/cart">Ir al carrito</Link>
                        <Link to="/">Seguir Comprando</Link>
                    </div>
                )}
            </article>
        </div>
    );
};

export default ItemDetail