import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/Productos"; // ajustá la ruta
import ItemList from "../ItemList/ItemList"; // componente que hace el map

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productos = await getProductos();
                if (categoriaId) {
                    setItems(productos.filter(p => p.categoria === categoriaId));
                } else {
                    setItems(productos);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [categoriaId]);

    return (
        <div>
            <h2>Catálogo</h2>
            <ItemList productos={items} />
        </div>
    );
};

export default ItemListContainer;