import Item from "../Item/Item";
import "./StyleList.css";

const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.map(prod => (
                <Item key={prod.id} producto={prod} />
            ))}
        </div>
    );
};

export default ItemList;