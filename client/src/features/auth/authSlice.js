import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: undefined,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      localStorage.setItem('auth', JSON.stringify(action.payload))
      state.user = action.payload
    },
    userLoggedOut: (state) => {
      state.user = undefined
      localStorage.removeItem('auth')
    },
  },
})

export const { userLoggedIn, userLoggedOut } = slice.actions
export default slice.reducer
