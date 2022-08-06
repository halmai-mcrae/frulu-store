import './CartScreen.css'

// Components
import CartItem from '../components/CartItem'

const CartScreen = () => {
  return (
  <div className="cartscreen">
    <div className="cartscreen__left">
    <CartItem />
    </div>
    <div className="cartscreen__right">
      <div className="cartscreen__info">
        <p>You have (0) items</p>
        <p>$1.99</p>
        </div>
        <div>
        <button>Checkout</button>
        </div>
    </div>
    </div>


)}

export default CartScreen
