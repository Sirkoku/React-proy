import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar(){
    return(
        <nav style={{display:"flex",justifyContent:"space-between",padding: "1rem",backgroundColor:"#eee"}}>
            <Link to="/" style={{textDecoration:"none",}}>
        Inicio
            </Link>

            < Link to="/cart" style={{textDecoration:"none"}}>
            <CartWidget/>
            </Link>
        </nav>
    );
}
export default NavBar;


