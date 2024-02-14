import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarExpanded: false,
  theme: undefined,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    sidebarToggled: (state, action) => {
      state.sidebarExpanded = !state.sidebarExpanded
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { sidebarToggled, setTheme } = globalSlice.actions
export default globalSlice.reducer
