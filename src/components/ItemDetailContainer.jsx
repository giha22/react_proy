import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail.jsx";
import { getProductoPorId } from "../data/Productos";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        getProductoPorId(id)
            .then((res) => setProducto(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;

    return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;

