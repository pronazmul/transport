import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: undefined,
  role: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      localStorage.setItem('auth_token', action.payload?.token)

      state.user = action.payload
      state.role = action.payload?.type || ''
    },
    userUpdate: (state, action) => {
      state.user = action.payload
      state.role = action.payload?.type || ''
    },
    userLoggedOut: (state) => {
      localStorage.removeItem('auth_token')

      state.user = undefined
      state.role = ''
    },
  },
})

export const { userLoggedIn, userLoggedOut, userUpdate } = authSlice.actions
export default authSlice.reducer
