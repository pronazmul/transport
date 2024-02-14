import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activities: [],
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {},
})

export const {} = activitySlice.actions
export default activitySlice.reducer
