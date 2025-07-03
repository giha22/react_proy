import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import carrito from '../../assets/carrito.png'
import './cartwidget.css';


function CartWidget() {

    const { totalUnidades } = useCart();

    return (
    <div>
    <Link to="/cart">
            <img className="carrito" src={carrito} alt="imagen de carrito" />
            {totalUnidades > 0 && <span className="numero">{totalUnidades}</span>}
    </Link>
    </div>
    )
}

export default CartWidget