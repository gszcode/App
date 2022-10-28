import { useState } from 'react'
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { validateLogin } from '../../utils/errorsForms'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import './Login.scss'

export const Login = () => {
  const user = { email: '', password: '' }
  const [seePassword, setSeePassword] = useState(false)
  const [form, setForm] = useState(user)
  const [errors, setErrors] = useState(user)
  const navigate = useNavigate()

  function handleClick() {
    setSeePassword((prevValue) => !prevValue)
  }

  function handleChange(e) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
    setErrors(validateLogin({ ...form, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, value } = e.target

    setErrors(validateLogin({ ...form, [name]: value }))

    // login de usuarios
    axios
      .post('http://localhost:3001/api/v1/auth/login', form)
      .then((data) => {
        if (data.data.success) return navigate('/')
      })
      .catch((error) => {
        const onlyError = error.response.data.message

        if (onlyError) {
          Swal.fire({
            title: 'Error!',
            text: onlyError,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }

        const errors = error.response.data.errors

        errors.forEach((e) => {
          Swal.fire({
            title: 'Error!',
            text: e.msg,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
      })
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <div
        className={
          errors.email ? 'login__input login__input--error' : 'login__input'
        }
      >
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
        <span className="login__error">{errors.email}</span>
      </div>
      <div
        className={
          errors.password ? 'login__input login__input--error' : 'login__input'
        }
      >
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
        <span className="login__error">{errors.password}</span>
      </div>
      <Link to="/password/forgot" className="login__forget">
        Forget Password?
      </Link>
      <button
        className={
          !form.email || !form.password
            ? 'login__btn login__btn--disabled'
            : 'login__btn'
        }
      >
        Login
      </button>
    </form>
  )
}
