import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link to="/">
        <h3>Frulu<span>Store</span><span className="symbol">®</span></h3>
        </Link>
        <p>
					<a href="https://github.com/halmai-mcrae">Design</a>
          |
					<a href="/">About</a>
					|
					<a href="/">FAQ'S</a>
				</p>
      </div>
      <div className="welcome-note"> 
        <h4>Welcome, Fruit Lovers.</h4>
        <h5>You found us.</h5>
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
          <Link to="/">Store</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburgermenu" onClick={click}>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </nav>
  )
}

export default Navbar
