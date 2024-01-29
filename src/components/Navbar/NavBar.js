import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="menu">
            <h3>Print Data</h3>
            <div className="links">
                <NavLink to= {`/category/multifuncion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Multifunción</NavLink>
                <NavLink to= {`/category/continua`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tinta Contínua</NavLink>
                <NavLink to= {`/category/laser`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Láser</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar