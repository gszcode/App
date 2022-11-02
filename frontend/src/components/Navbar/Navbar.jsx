import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Navbar.scss'
import {
  FaSistrix,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes
} from 'react-icons/fa'

export const Navbar = () => {
  const [barsState, setBarsState] = useState(false)
  const { user } = useSelector((state) => state.users)

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
        {!user.success ? (
          <Link to="/user-access">
            <FaUser className="navbar__icons__item" />
          </Link>
        ) : (
          <Link to="/profile" className="navbar__icons__item">
            <img
              className="navbar__icons__img"
              src={user.userAvatar.avatar}
              alt="User Avatar"
            />
          </Link>
        )}
      </div>
    </nav>
  )
}
