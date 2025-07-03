import { useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function TraerCollection() {
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
        .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(items);
        })
        .catch((error) => {
        console.error("Error fetching items:", error);
        });
    }, []);

  return null; // This component does not render anything
}