import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const { categoriaId } = useParams();      // /productos/:categoriaId
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let productosRef = collection(db, "items");   // tu colección se llama "items"

    // si hay categoría en la URL => filtramos
    if (categoriaId) {
        productosRef = query(productosRef, where("categoria", "==", categoriaId));
    }

    getDocs(productosRef)
        .then((snapshot) => {
            const productos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        setItems(productos);
        })
        .catch((e) => console.error("Error al traer productos", e))
        .finally(() => setLoading(false));
    }, [categoriaId]);

    if (loading) return <p style={{ textAlign: "center" }}>Cargando productos…</p>;

    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Catálogo</h2>
            <ItemList productos={items} />
        </section>
    );
};

export default ItemListContainer;