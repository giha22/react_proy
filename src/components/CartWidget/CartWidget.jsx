import React from 'react'
import carrito from '../../assets/carrito.png'
import './CartWidget.css';

function CartWidget() {
    return (
    <div>
        <img className="carrito" src={carrito} alt="imagen de carrito" />
        <span className='numero'>2</span>
    </div>
    )
}

export default CartWidget