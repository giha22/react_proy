import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx";
import SidebarCategorias from "./SidebarCategorias/SidebarCategorias";

const Layout = () => {
    const { pathname } = useLocation();
    const mostrarSidebar = pathname.includes("/productos");

    return (
        <>
            <NavBar />
            <div style={{ display: "flex" }}>
                {mostrarSidebar && <SidebarCategorias />}
                <main style={{ padding: "1rem", flex: 1 }}>
                <Outlet />
            </main>
            </div>
        </>
    );
};

export default Layout;