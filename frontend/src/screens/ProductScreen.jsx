import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/Footer'
import './ProductScreen.css'

const ProductScreen = ({handleClick}) => {
  return (
  <div className="productscreen">
    <div className="productscreen__left">
      <div className="left__image">
      <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt="Bananas"/>
        </div>

        <div className="left__info">
          <p className="left__name">Watermelon | Merangi</p>
          <p>$1.99</p>
          <p>You know what it is.</p>
        </div>

    </div>
    <div className="productscreen__right">
      <div className="right__info">
        <p>
          Price: <span>$1.99</span>
        </p>
        <p>
          In stock: <span><FontAwesomeIcon icon="fa-solid fa-check" /></span>
        </p>
        <p>
          Quantity:
        <select>
          <option value="1">6</option>
          <option value="2">12</option>
          <option value="3">24</option>
          <option value="4">48</option>
          <option value="5">100</option>
        </select>
        </p>
        <p>
          <button type="button" onClick={handleClick}>
                  Add To Cart
          </button>
        </p>
      </div>
      
      </div>
      <div>
      <Footer />
      </div>
  </div>
)}

export default ProductScreen
