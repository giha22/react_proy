import { useState } from "react";
import { addDoc, collection, Firestore, Timestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cart, totalAPagar, clearCart } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [form, setForm] = useState({ nombre: "", email: "" });

    const db = Firestore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            buyer: form,
            items: cart,
            total: totalAPagar,
            date: Timestamp.fromDate(new Date()),
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), orden);
            setOrderId(docRef.id);
            clearCart();
        } catch (err) {
            console.log(err);
        }
    };

    if (orderId)
        return (
            <div className="orden-confirmada">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es:</p>
                <strong>{orderId}</strong>
            </div>
        );

    return (
        <form onSubmit={handleSubmit} className="checkout">
            <h2>Datos para la compra</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />
            <button type="submit">Comprar</button>
        </form>
    );
};

export default Checkout;