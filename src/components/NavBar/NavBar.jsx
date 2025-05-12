import React from 'react'
import './NavBar.css';
import logo from '../../assets/socks.png'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            
            <nav className="navBar">
                <div>
                <img className="logo" src={logo} alt="logo de moonsocks" />
                </div>
                <ul className="navBarUl">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre Nosotros</a></li>
                    <li><a href="/services">Productos</a></li>
                    <li><a href="/contact">Contactos</a></li>
                </ul>
                <CartWidget />
            </nav>
            
        </>
        )
}

export default NavBar