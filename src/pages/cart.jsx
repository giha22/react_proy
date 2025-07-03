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
        <div>
            <h2>Tu carrito</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h4>{item.nombre}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Subtotal: ${item.cantidad * item.precio}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total a pagar: ${totalAPagar}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <br />
            <Link to="/checkout">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
};

export default Cart;