import {useState} from "react";

function CartWidget(){
    const [cantidad,setcantidad] = useState(3);

    return(
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <span role="img" aria-label="carrito">🛒</span>
            {cantidad > 0 &&  <span>{cantidad}</span> }
        </div>
    )
}
export default CartWidget;