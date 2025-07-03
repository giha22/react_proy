import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Ajustá la ruta si es distinta
import ItemCount from "../ItemCount";

const ItemDetail = ({ producto }) => {
    const { addItem } = useCart();
    const [agregado, setAgregado] = useState(false);

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad);
        setAgregado(true);
    };

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>

            {
                agregado
                    ? <Link to="/cart" className="btn-ir-carrito">Ir al carrito</Link>
                    : <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            }
        </div>
    );
};

export default ItemDetail;