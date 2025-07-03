import { Link } from "react-router-dom";
import "./item.css";
import ItemCount from "../ItemCount";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

const Item = ({ producto }) => {
    const { addItem } = useCart();
    const [agregado, setAgregado] = useState(false);

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad);
        setAgregado(true);
    };

    return (
        <div className="item-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>Ver detalle</Link>

            {agregado
                ? <p>✅ Agregado</p>
                : <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            }
        </div>
    );
};

export default Item;