import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userLoggedOut } from './../auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:5000/api/v1',
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      headers.set('Authorization', token)
    }
    return headers
  },
  credentials: 'include', // For Accepting Cookie From Client Side
})

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut())
    }
    return result
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
})
