import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import './Register.scss'

export const Register = () => {
  const [seePassword, setSeePassword] = useState(false)

  function handleClick() {
    setSeePassword((prevValue) => !prevValue)
  }

  return (
    <div className="register">
      <div className="register__input">
        <span className="register__input__icon">
          <AiOutlineUser />
        </span>
        <input type="text" placeholder="User" />
      </div>
      <div className="register__input">
        <span className="register__input__icon">
          <AiOutlineMail />
        </span>
        <input type="email" placeholder="Email" />
      </div>
      <div className="register__input">
        <span className="register__input__icon">
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
      <button className="register__btn">Register</button>
    </div>
  )
}
