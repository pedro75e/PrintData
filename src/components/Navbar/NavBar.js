import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="menu">
            <h3>Print Data</h3>
            <div className="links">
                <button>Insumos</button>
                <button>Marcas</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar