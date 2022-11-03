import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
  return (
    <figure className='productFigure'>
        <img src={prod.img} alt={prod.nombre}/>
        <figcaption>{prod.nombre}</figcaption>
        <p>U$S {prod.precio}.-</p>
        <Link to={`/detail/${prod.id}`}><Button BtnText={"Ver Detalles"}/></Link>
    </figure>
  )
}

export default Item