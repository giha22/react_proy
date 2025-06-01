import { useState } from "react";
import "./ItemCount.css"; // Asegúrate de tener un archivo CSS para estilos

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const incrementar = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    };

    const decrementar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span style={{ margin: "0 10px" }}>{cantidad}</span>
            <button onClick={incrementar}>+</button>
            <br />
            <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;