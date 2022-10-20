import { Link } from 'react-router-dom'
import { FaSistrix, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../../images/logo.png'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__image">
        <img src={logo} alt="Logo" className="navbar__image--logo" />
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu--link" to="/">
          Home
        </Link>
        <Link className="navbar__menu--link" to="/products">
          Products
        </Link>
        <Link className="navbar__menu--link" to="/contact">
          Contact
        </Link>
        <Link className="navbar__menu--link" to="/about">
          About
        </Link>
      </div>
      <div className="navbar__icons">
        <FaSistrix className="navbar__icons--item" />
        <FaShoppingCart className="navbar__icons--item" />
        <FaUser className="navbar__icons--item" />
      </div>
    </nav>
  )
}
