import './ProductScreen.css'

const ProductScreen = () => {
  return (
  <div className="productscreen">
    <div className="productscreen__left">
      <div className="left__image">
      <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt="Bananas"/>
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price:</p>
          <p>Description: Lorem ipsum sequi voluptas inorod dolor.</p>
        </div>

    </div>
    <div className="productscreen__right">
      <div className="right__info">
        <p>
          Price: <span>$1.99</span>
        </p>
        <p>
          Status: <span>In Stock</span>
        </p>
        <p>
          Quantity
        </p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      
      </div>
  </div>
)}

export default ProductScreen
