import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import Button from './Button';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='navBar'>
        <NavLink to="/"><img src={logo} alt="Logo de la Empresa SOLENA" className='navLogo'/></NavLink>
        <ul>
            <NavLink className= "links" to="category/baterias"><li>Baterías</li></NavLink>
            <NavLink className= "links" to="category/inversores"><li>Inversores</li></NavLink>
            <NavLink className= "links" to="category/paneles-solares"><li>Paneles Solares</li></NavLink>
            <NavLink className= "links" to="category/termotanques-solares"><li>Termotanques Solares</li></NavLink>
            <NavLink className= "links" to="category/accesorios"><li>Accesorios</li></NavLink>
            <NavLink to="/cart"><li><CartWidget/></li></NavLink>
            <li><Button BtnText={"Ingresar"}/></li>
        </ul>
    </nav>
  )
}

export default NavBar