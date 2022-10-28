import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'

const store = configureStore({
  reducer: {
    users: userSlice
  }
})

export default store
