import { useState } from 'react'
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Login.scss'

export const Login = () => {
  const [seePassword, setSeePassword] = useState(false)

  function handleClick() {
    setSeePassword((prevValue) => !prevValue)
  }

  return (
    <div className="login">
      <div className="login__input">
        <span className="login__input__icon">
          <AiOutlineMail />
        </span>
        <input type="email" placeholder="Email" />
      </div>
      <div className="login__input">
        <span className="login__input__icon">
          <AiOutlineUnlock />
        </span>
        <input
          type={seePassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <span onClick={handleClick} className="eye">
          {seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      </div>
      <Link to="/password/forgot" className="login__forget">
        Forget Password?
      </Link>
      <button className="login__btn">Login</button>
    </div>
  )
}
