import './CartScreen.css'

// Components
import CartItem from '../components/CartItem'

const CartScreen = () => {
  return (
  <div className="cartscreen">
    <div className="cartscreen-left">
    <CartItem />
    </div>
    <div className="cartscreen-right">
      <div className="cartscreen-info">
        <p>(0) items</p>
        <p>$1.99</p>
        </div>
        <div>
        <button>Checkout</button>
        </div>
    </div>
    </div>


)}

export default CartScreen
