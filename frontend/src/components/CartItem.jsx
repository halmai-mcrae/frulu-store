import './CartItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt=""/>
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product 1</p>
        </Link>

        <p className="cartitem__price">$1.99</p>

        <select className="cartitem__select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>

        <button className="cartitem__remove-button">
          <div>
          <FontAwesomeIcon icon="fa-fas fa-trash" />
          </div>
        </button>
      

  
    </div>
  );
}

export default CartItem;