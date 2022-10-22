import { Link } from 'react-router-dom'
import {
  FaSistrix,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import logo from '../../images/logo.png'
import './Navbar.scss'
import { useState } from 'react'

export const Navbar = () => {
  const [barsState, setBarsState] = useState(false)

  function handleClick() {
    setBarsState((prevState) => !prevState)
  }

  return (
    <nav className="navbar">
      <div className="navbar__image navbar__image--mobile">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar__image__logo" />
        </Link>
      </div>
      <div className="navbar__bars--mobile">
        <button onClick={handleClick} className="navbar__bars__button--mobile">
          {barsState ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={barsState ? 'navbar__menu' : 'navbar__menu--mobile'}>
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
      <div className={barsState ? 'navbar__icons' : 'navbar__icons--mobile'}>
        <Link to="/search">
          <FaSistrix className="navbar__icons__item" />
        </Link>
        <Link to="/shop">
          <FaShoppingCart className="navbar__icons__item" />
        </Link>
        <Link to="/user-access">
          <FaUser className="navbar__icons__item" />
        </Link>
      </div>
    </nav>
  )
}
