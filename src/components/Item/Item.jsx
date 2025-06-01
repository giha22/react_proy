import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ producto }) => {
    return (
        <div className="item-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;