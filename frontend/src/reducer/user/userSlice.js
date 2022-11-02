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
    },
    clearState: (state, action) => {
      state.user = []
    }
  }
})

export const { getUser, getUserData, clearState } = userSlice.actions
export default userSlice.reducer

// Registro e Inicio de sesión
export const registerAndLoginUser = (url, form, loginOrRegister) => {
  return (dispatch) => {
    axios
      .post(url, form)
      .then((data) => {
        console.log(data.data)
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
            confirmButtonText: 'Close'
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
export const getProfileUser = (url) => {
  return (dispatch) => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((data) => {
        dispatch(getUserData(data.data))
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.response.data.error,
          icon: 'error',
          confirmButtonText: 'Close'
        })
      })
  }
}
