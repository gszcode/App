import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'

const initialState = {
  user: [],
  userData: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
    },
    getUserData: (state, action) => {
      state.userData = action.payload
    }
  }
})

export const { getUser, getUserData } = userSlice.actions
export default userSlice.reducer

// Registro e Inicio de sesión
export const registerAndLoginUser = (url, form, loginOrRegister) => {
  return (dispatch) => {
    axios
      .post(url, form)
      .then((data) => {
        dispatch(getUser(data.data))
        Swal.fire({
          title: 'Success!',
          text:
            loginOrRegister === 'login'
              ? 'Successful Login'
              : 'Successful Registration',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      })
      .catch((err) => {
        const onlyError = err.response.data.message
        if (onlyError) {
          Swal.fire({
            title: 'Error!',
            text: onlyError,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }

        const errors = err.response.data.message
        errors.forEach((e) => {
          Swal.fire({
            title: 'Error!',
            text: e.msg,
            icon: 'error',
            confirmButtonText: 'Close'
          })
        })
      })
  }
}

// Obtener datos del usuario
export const getProfileUser = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/api/v1/auth/profile', {
        withCredentials: true
      })
      .then((data) => dispatch(getUserData(data)))
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
}
