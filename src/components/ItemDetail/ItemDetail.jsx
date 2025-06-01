import { useState } from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({ producto }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const handleAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        // En un futuro: agregar al carrito acá
    };

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>

            {
                cantidadAgregada > 0
                    ? <p>{cantidadAgregada} unidad/es seleccionadas.</p>
                    : <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            }
        </div>
    );
};

export default ItemDetail;