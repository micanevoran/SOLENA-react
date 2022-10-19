import React from 'react'
import logo from '../img/logo.svg';
import Button from './Button';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='navBar'>
        <img src={logo} alt="Logo de la Empresa SOLENA" className='navLogo' />
        <ul>
            <li>Ver Productos</li>
            <li><CartWidget/></li>
            <li><Button BtnText={"Ingresar"}/></li>
        </ul>
    </nav>
  )
}

export default NavBar