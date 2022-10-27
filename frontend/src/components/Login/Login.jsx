import { useState } from 'react'
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { validateLogin } from '../../utils/errorsForms'
import './Login.scss'

export const Login = () => {
  const user = { email: '', password: '' }
  const [seePassword, setSeePassword] = useState(false)
  const [form, setForm] = useState(user)
  const [errors, setErrors] = useState(user)

  function handleClick() {
    setSeePassword((prevValue) => !prevValue)
  }

  function handleChange(e) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
    setErrors(validateLogin({ ...form, [name]: value }))
  }

  console.log({ form })
  console.log({ errors })

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="login__input">
        <span className="login__input__icon">
          <AiOutlineMail />
        </span>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <span style={{ 'font-size': '15px' }}>{errors.email}</span>
      </div>
      <div className="login__input">
        <span className="login__input__icon">
          <AiOutlineUnlock />
        </span>
        <input
          name="password"
          type={seePassword ? 'text' : 'password'}
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span onClick={handleClick} className="eye">
          {seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <span style={{ 'font-size': '15px' }}>{errors.password}</span>
      </div>
      <Link to="/password/forgot" className="login__forget">
        Forget Password?
      </Link>
      <button className="login__btn">Login</button>
    </form>
  )
}
