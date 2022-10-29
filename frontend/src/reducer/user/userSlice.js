import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'

const initialState = {
  user: []
  // errors: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
    }
    // getErrors: (state, action) => {
    //   state.errors = action.payload
    // }
  }
})

export const { getUser, getErrors } = userSlice.actions
export default userSlice.reducer

// Llamadas a la api
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
