import { apiSlice } from '../api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    // logout: builder.query({}),
  }),
})

export const { useLoginMutation } = authApi
