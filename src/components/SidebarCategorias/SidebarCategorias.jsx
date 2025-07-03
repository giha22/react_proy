import { NavLink } from "react-router-dom";
import "./SidebarCategorias.css";

const categorias = [
    { id: "cartoon", nombre: "Cartoon" },
    { id: "pelis", nombre: "Pelis y Series" },
    { id: "futbol", nombre: "Fútbol" },
    { id: "argentinidad", nombre: "Argentinidad" },
    { id: "gringolandia", nombre: "Gringolandia" },
    { id: "aburridas", nombre: "Aburridas" },
];

const SidebarCategorias = () => {
    return (
    <aside className="sidebar">
        <h3>Categorías</h3>
        <ul>
            {categorias.map((cat) => (
            <li key={cat.id}>
                <NavLink
                    to={`/productos/${cat.id}`}
                    className={({ isActive }) => (isActive ? "activo" : "")}
                >
                    {cat.nombre}
                </NavLink>
            </li>
            ))}
        </ul>
    </aside>
    );
};

export default SidebarCategorias;