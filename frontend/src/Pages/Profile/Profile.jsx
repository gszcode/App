import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, getProfileUser } from '../../reducer/user/userSlice'
import { Loading } from '../../components/Loading/Loading'
import './Profile.scss'

export function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userData } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getProfileUser('http://localhost:3001/api/v1/auth/profile'))
  }, [dispatch])

  function handleClick() {
    localStorage.clear()
    dispatch(clearState())
    navigate('/user-access')
  }

  return (
    <>
      {userData.success ? (
        <section className="profile">
          <div className="profile__container">
            <div className="profile__photo">
              <div className="profile__photo__img">
                <img src={userData.user.avatar} alt="Avatar" />
              </div>
              <button className="profile__photo__button">Edit Profile</button>
              {/* Cloudinary */}
            </div>
            <div className="profile__data">
              <div className="profile__data__content">
                <h3 className="item">Full Name</h3>
                <p className="item">{userData.user.name.toUpperCase()}</p>
              </div>
              <div className="profile__data__content">
                <h3 className="item">Email</h3>
                <p className="item">{userData.user.email.toUpperCase()}</p>
              </div>
              <div className="profile__data__content">
                <h3 className="item">Joined On</h3>
                <p className="item">
                  {userData.user.date.toUpperCase().slice(0, 10)}
                </p>
              </div>

              <button className="profile__data__btn">My Orders</button>
              <button onClick={handleClick} className="profile__data__btn">
                Logout
              </button>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}
