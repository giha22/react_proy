import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, cantidad) => {

    const existe = cart.find((prod) => prod.id === item.id);
    if (existe) {
        setCart(
            cart.map((prod) =>
            prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            )
        );
    } else {
        setCart([...cart, { ...item, cantidad }]);
    }
    };

    const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id));
    const clearCart = () => setCart([]);
    const totalUnidades = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    const totalAPagar = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, totalUnidades, totalAPagar }}
            >
            {children}
        </CartContext.Provider>
    );
};