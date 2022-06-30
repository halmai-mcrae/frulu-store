import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
    <div className="product">
      <img src="https://images.unsplash.com/photo-1587280717868-fff936890905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" alt="Bananas"/>
      <div className="product__info">
        <p className="info__name">
          Product 1
          </p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        {/* <p className="info__price">
          $4.99
        </p> */}
        <Link to={`/product/${1111}`} className="info__button">View</Link>
      </div>
  </div>
    <div className="product">
    <img src="https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2681&q=80" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Product 1
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      {/* <p className="info__price">
        $4.99
      </p> */}
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
</div>
<div className="product">
    <img src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Product 1
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      {/* <p className="info__price">
        $4.99
      </p> */}
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
</div>
<div className="product">
    <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Product 1
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      {/* <p className="info__price">
        $4.99
      </p> */}
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
</div>
</>
  )
}

export default Product;