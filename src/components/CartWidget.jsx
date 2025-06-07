
import { Link } from "react-router-dom";
function CartWidget(){
    const [cantidad,setcantidad] = useState(1);

    return(
        <Link to="/cart" style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <span role="img" aria-label="carrito">🛒</span>
            {cantidad > 0 &&  <span>{cantidad}</span> }
        </Link>
    )
}
export default CartWidget;