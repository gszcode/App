import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser } from '../../reducer/user/userSlice'
import './Profile.scss'

export function Profile() {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.users)
  console.log(userData)

  useEffect(() => {
    dispatch(getProfileUser())
  }, [dispatch])

  return <div className="profile">{/* <h1>{user.user.name}</h1> */}</div>
}
