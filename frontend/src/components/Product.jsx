import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80" alt="Bananas"/>
      <div className="product__info">
        <p className="info__name">
          Product 1
          </p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <p className="info__price">
          $4.99
        </p>
        <Link to={`/product/${1111}`} className="info__button">View</Link>
      </div>
  </div>
  )
}

export default Product;