import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allUsers: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.allUsers = action.payload
    }
  }
})

export const { getAllUsers } = userSlice.actions
export default userSlice.reducer
