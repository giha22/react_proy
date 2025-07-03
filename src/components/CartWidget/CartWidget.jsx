import { useCart } from "../../context/CartContext";
import carrito from '../../assets/carrito.png'
import './cartwidget.css';


function CartWidget() {

    const { totalUnidades } = useCart();

    return (
    <div>
        <img className="carrito" src={carrito} alt="imagen de carrito" />
        {totalUnidades > 0 && <span className="numero">{totalUnidades}</span>}
    </div>
    )
}

export default CartWidget