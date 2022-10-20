import { Link } from 'react-router-dom'
import { FaSistrix, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../../images/logo.png'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="navbar navbar__mobile">
      <div className="navbar__image navbar__image--mobile">
        <img src={logo} alt="Logo" className="navbar__image__logo" />
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu__link" to="/">
          Home
        </Link>
        <Link className="navbar__menu__link" to="/products">
          Products
        </Link>
        <Link className="navbar__menu__link" to="/contact">
          Contact
        </Link>
        <Link className="navbar__menu__link" to="/about">
          About
        </Link>
      </div>
      <div className="navbar__icons">
        <FaSistrix className="navbar__icons__item" />
        <FaShoppingCart className="navbar__icons__item" />
        <FaUser className="navbar__icons__item" />
      </div>
    </nav>
  )
}
