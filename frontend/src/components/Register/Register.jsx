import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { validateRegister } from '../../utils/errorsForms'
import './Register.scss'

export const Register = () => {
  const user = { user: '', email: '', password: '', repassword: '' }
  const [seePassword, setSeePassword] = useState(false)
  const [seeRePassword, setSeeRePassword] = useState(false)
  const [errors, setErrors] = useState(user)
  const [form, setForm] = useState(user)

  function handleClickPassword(e) {
    setSeePassword((prevValue) => !prevValue)
  }

  function handleClickRePassword(e) {
    setSeeRePassword((prevValue) => !prevValue)
  }

  function handleChange(e) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
    setErrors(validateRegister({ ...form, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, value } = e.target

    setErrors(validateRegister({ ...form, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="register">
      <div
        className={
          errors.user
            ? 'register__input register__input--error'
            : 'register__input'
        }
      >
        <span className="register__input__icon">
          <AiOutlineUser />
        </span>
        <input
          name="user"
          onChange={handleChange}
          type="text"
          placeholder="User"
        />
        <span className="register__error">{errors.user}</span>
      </div>
      <div
        className={
          errors.email
            ? 'register__input register__input--error'
            : 'register__input'
        }
      >
        <span className="register__input__icon">
          <AiOutlineMail />
        </span>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <span className="register__error">{errors.email}</span>
      </div>
      <div
        className={
          errors.password
            ? 'register__input register__input--error'
            : 'register__input'
        }
      >
        <span className="register__input__icon">
          <AiOutlineUnlock />
        </span>
        <input
          name="password"
          onChange={handleChange}
          type={seePassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <span onClick={handleClickPassword} name="aye_pass" className="eye">
          {seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <span className="register__error">{errors.password}</span>
      </div>
      <div
        className={
          errors.password
            ? 'register__input register__input--error'
            : 'register__input'
        }
      >
        <span className="register__input__icon">
          <AiOutlineUnlock />
        </span>
        <input
          name="repassword"
          onChange={handleChange}
          type={seeRePassword ? 'text' : 'password'}
          placeholder="Repeat Password"
        />
        <span onClick={handleClickRePassword} className="eye">
          {seeRePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <span className="register__error">{errors.repassword}</span>
      </div>
      <button
        className={
          !form.user || !form.email || !form.password || !form.repassword
            ? 'register__btn register__btn--disabled'
            : 'register__btn'
        }
      >
        Register
      </button>
    </form>
  )
}
