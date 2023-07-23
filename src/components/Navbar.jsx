import { Link } from "react-router-dom";
import { useContext } from "react";

import MyContext from "../my_context";

const Navbar = () => {
    const {navTotal} = useContext(MyContext);
    
    return(
        <div className="navbar bg-secondary">
            <div className="container">
                <div className="navbar-brand">
                    <h5> <Link to="/carrito" className="text-light text-decoration-none"><i class="fa-solid fa-cart-shopping"></i> ${navTotal}</Link></h5>
                </div>
                <div className="navbar-brand">
                    <h5> <Link to="/" className="text-light text-decoration-none"><i class="fa-solid fa-palette"></i></Link></h5>
                </div>
                <div>
                    <h5 className="text-light">Menú</h5></div>
                <div>
                    <h5 className="text-light">Búsqueda</h5>
                
                </div>
                <div>
                    <h5><Link to="Registro" className="text-light text-decoration-none">Registro</Link></h5>
                
                </div>
                <div>
                    <h5><Link to="Login" className="text-light text-decoration-none">Inicio de Sesión</Link></h5>
                </div>                                                
            </div>            
        </div>
        
    )
}

export default Navbar;