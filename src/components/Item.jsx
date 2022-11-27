import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
  return (
    <figure className='productFigure'>
        <img src={prod.img} alt={prod.nombre}/>
        <figcaption>{prod.nombre}</figcaption>
        <p>U$S {prod.precio}.-</p>
        <Link to={`/detail/${prod.id}`}><button>Ver Detalles</button></Link>
    </figure>
  )
}

export default Item