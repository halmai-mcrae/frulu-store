import './ProductScreen.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

// Components
import Footer from '../components/Footer'

const ProductScreen = () => {
  const { id } = useParams()
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, error, product } = useSelector(
    (state) => state.getProductDetails
  )

  const addToCartHandler = () => {
    dispatch(addToCart( id, qty))
    navigate('/cart')
  }

      useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [dispatch, product, id])

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
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
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default ProductScreen