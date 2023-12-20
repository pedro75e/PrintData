import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>
            <h3>Print Data</h3>
            <div>
                <button>Insumos</button>
                <button>Marcas</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar