import { collection, addDoc, getFirestore } from "firebase/firestore";
import productos from "../data/Productos.jsx"; // o de donde estés importando tu array

function Agregar() {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    const agregarItems = () => {
        productos.forEach(async (prod) => {
            const nuevoItem = {
                nombre: prod.nombre,
                precio: prod.precio,
                categoria: prod.categoria,
                imagen: prod.imagen,
                descripcion: prod.descripcion,
                stock: prod.stock || 10
            };

            try {
                const docRef = await addDoc(itemsCollection, nuevoItem);
                console.log("Item agregado con ID:", docRef.id);
            } catch (error) {
                console.error("Error al agregar item:", error);
            }
        });
    };

    return (
        <div>
            <h3>Agregar productos a Firestore</h3>
            <button onClick={agregarItems}>Agregar</button>
        </div>
    );
}

export default Agregar;