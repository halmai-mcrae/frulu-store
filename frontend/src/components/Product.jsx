import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
    <div className="product">
      <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="Bananas"/>
      <div className="product__info">
        <p className="info__name">
          Banana | Panana
          </p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <Link to={`/product/${1111}`} className="info__button">View</Link>
      </div>
  </div>
    <div className="product">
    <img src="https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2681&q=80" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Apple | Aporo
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
</div>
<div className="product">
    <img src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Orange | Karaka
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
</div>
<div className="product">
    <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="Bananas"/>
    <div className="product__info">
      <p className="info__name">
        Melon | Merengi
        </p>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <Link to={`/product/${1111}`} className="info__button">View</Link>
    </div>
  </div>

</>
  )
}

export default Product;