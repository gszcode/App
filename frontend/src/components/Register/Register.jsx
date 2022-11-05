import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { validateRegister } from '../../utils/errorsForms'
import { useDispatch, useSelector } from 'react-redux'
import { registerAndLoginUser } from '../../reducer/user/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.scss'

export const Register = () => {
  const userData = {
    name: '',
    email: '',
    password: '',
    repassword: ''
  }
  const [seePassword, setSeePassword] = useState(false)
  const [seeRePassword, setSeeRePassword] = useState(false)
  const [errors, setErrors] = useState(userData)
  const [form, setForm] = useState(userData)
  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  localStorage.setItem('token', user.token)

  function handleClickPassword() {
    setSeePassword((prevValue) => !prevValue)
  }

  function handleClickRePassword() {
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

    // registro de usuarios
    dispatch(
      registerAndLoginUser(
        'http://localhost:3001/api/v1/auth/register',
        form,
        'register'
      )
    )
  }

  return (
    <form onSubmit={handleSubmit} className="register">
      {user.success && navigate('/')}
      <div
        className={
          errors.name
            ? 'register__input register__input--error'
            : 'register__input'
        }
      >
        <span className="register__input__icon">
          <AiOutlineUser />
        </span>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          value={form.name}
        />
        <span className="register__error">{errors.name}</span>
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
          value={form.email}
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
          value={form.password}
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
          value={form.repassword}
        />
        <span onClick={handleClickRePassword} className="eye">
          {seeRePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <span className="register__error">{errors.repassword}</span>
      </div>
      <button
        className={
          !form.name || !form.email || !form.password || !form.repassword
            ? 'register__btn register__btn--disabled'
            : 'register__btn'
        }
      >
        Register
      </button>
    </form>
  )
}
