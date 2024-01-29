import cart from './assets/carrito.ico'

const CartWidget = () => {
    return(
        <div className='carrito'>
            <img src={cart} alt='cart-widget' />
            0
        </div>
    )
}

export default CartWidget