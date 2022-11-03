import React from 'react'
import Contador from './Contador'

const ItemDetail = ({ item }) => {
    return (
        <div className='itemDetail'>
            <img src={item.img} alt={item.nombre}/>
            <article>
                <h2>{item.nombre}</h2>
                <p>{item.description}</p>
                <h3>U$S {item.precio}.-</h3>
                <div>
                    <p>Cantidad a Agregar</p>
                    <Contador stock={item.cantidad}/>
                </div>
            </article>
        </div>
    );
};

export default ItemDetail