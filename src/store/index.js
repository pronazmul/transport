import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authReducer from './auth/authSlice'
import categoryReducer from './categories/categorySlice'
import globalSlice from './global/globalSlice'
import usersReducer from './users/usersSlice'
import feedReducer from './feeds/feedSlice'
import activityReducer from './activities/activitySlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    users: usersReducer,
    categories: categoryReducer,
    feeds: feedReducer,
    activities: activityReducer,
    global: globalSlice,
  },
  devTools: true,
  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMIddlewares) =>
    getDefaultMIddlewares().concat(apiSlice.middleware),
})
