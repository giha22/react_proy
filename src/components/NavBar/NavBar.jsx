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
                    <li className="dropdown">
                        <a href="/productos">Productos</a>
                        <ul className="dropdown-menu">
                            <li><a href="/productos/cartoon">Cartoon</a></li>
                            <li><a href="/productos/pelis">Pelis y Series</a></li>
                            <li><a href="/productos/futbol">Fútbol</a></li>
                            <li><a href="/productos/argentinidad">Argentinidad</a></li>
                            <li><a href="/productos/gringolandia">Gringolandia</a></li>
                            <li><a href="/productos/aburridas">Aburridas</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">Contactos</a></li>
                </ul>
                <CartWidget />
            </nav>

        </>
    )
}

export default NavBar