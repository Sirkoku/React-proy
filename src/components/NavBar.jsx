import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar({cantidad}){
    return(
        <nav style={{display:"flex",justifyContent:"space-between",padding: "1rem",backgroundColor:"#eee"}}>
            <Link to="/" style={{textDecoration:"none",}}>
        Inicio
            </Link>
            <Link to="/categoria/buzos">buzos </Link>
            <Link to= "/categoria/camperas">Camperas</Link>
            <Link to= "/categoria/remeras">Remeras</Link>
            <CartWidget cantidad={cantidad}/>
        </nav>
    );
}
export default NavBar;


