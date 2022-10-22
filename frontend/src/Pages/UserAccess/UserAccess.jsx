import { useState } from 'react'
import './UserAccess.scss'

export const UserAccess = () => {
  const [access, setAccess] = useState({ login: true, register: false })

  function handleClick(e) {
    const name = e.target.name

    name === 'register'
      ? setAccess({ login: false, register: true })
      : setAccess({ login: true, register: false })
  }

  console.log(access)

  return (
    <section className="access">
      <div className="access__components">
        <div className="buttons">
          <input
            onClick={(e) => handleClick(e)}
            type="button"
            name="login"
            value="Login"
            className={
              access.login
                ? 'buttons__input buttons__input--focus'
                : 'buttons__input'
            }
          />
          <input
            onClick={(e) => handleClick(e)}
            type="button"
            name="register"
            value="Register"
            className={
              access.register
                ? 'buttons__input buttons__input--focus'
                : 'buttons__input'
            }
          />
        </div>
      </div>
    </section>
  )
}
