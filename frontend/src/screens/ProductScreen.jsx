import './ProductScreen.css'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

// Components 
import Footer from '../components/Footer'

const ProductScreen = () => {
  const { id, name, imageUrl, description, price, countInStock } = useParams();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const productDetails = 
  useSelector((state) => state.getProductDetails);
  // const { loading, error, product } = productDetails
  

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty))
    navigate('/cart')
  };

  console.log(id)
  console.log(name)



  return (
  <div className="productscreen">
          {/* { loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : ( */}
        <>
    <div className="productscreen__left">
    <div className="left__image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="left__info">
              <p className="left__name">{name}</p>
              <p>Price: ${price}</p>
              <p>Description: {description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${price}</span>
              </p>
              <p>
                Status:
                <span>
                  {countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
      <Footer />
      </div>
      </>
</div>
  )}


export default ProductScreen
