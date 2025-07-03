import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clearCart, totalAPagar } = useCart();

    if (cart.length === 0)
        return (
            <div style={{ textAlign: "center" }}>
                <h2>Carrito vacío</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );

    return (
        <div className="cart-page">
            {cart.map((prod) => (
                <div key={prod.id} className="cart-item">
                    <img src={prod.imagen} alt={prod.nombre} />
                    <p>{prod.nombre}</p>
                    <p>{prod.cantidad} u.</p>
                    <p>${prod.precio * prod.cantidad}</p>
                    <button onClick={() => removeItem(prod.id)}>X</button>
                </div>
            ))}
            <h3>Total: ${totalAPagar}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout" className="btn-checkout">Finalizar compra</Link>
        </div>
    );
};

export default Cart;