import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>FruitMe Cart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className='cartlink'>
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
            Cart
            <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburgermenu">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </nav>
  )
}

export default Navbar
