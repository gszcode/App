import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineUnlock,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai'
import { validateRegister } from '../../utils/errorsForms'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.scss'

export const Register = () => {
  const user = { name: '', email: '', password: '', repassword: '' }
  const [seePassword, setSeePassword] = useState(false)
  const [seeRePassword, setSeeRePassword] = useState(false)
  const [errors, setErrors] = useState(user)
  const [form, setForm] = useState(user)
  const navigate = useNavigate()

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
    axios
      .post('http://localhost:3001/api/v1/auth/register', form)
      .then((data) => {
        if (data.data.success) return navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit} className="register">
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
