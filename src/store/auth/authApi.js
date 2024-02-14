import { apiSlice } from '../api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    loggedInInfo: builder.query({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    // logout: builder.query({
    //   query: () => ({
    //     url: '/auth/logout',
    //     method: 'GET',
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       await queryFulfilled
    //       dispatch(userLoggedOut())
    //     } catch (error) {
    //       console.log({ error })
    //     }
    //   },
    // }),
    // getActiveSessions: builder.query({
    //   query: (userId) => ({
    //     url: `/auth/sessions/${userId}`,
    //     method: 'GET',
    //   }),
    //   transformResponse(apiResponse) {
    //     // return apiResponse?.data
    //     return apiResponse
    //   },
    // }),
    // deactivateSession: builder.mutation({
    //   query: ({ userId, sessionId }) => ({
    //     url: `/auth/sessions/${sessionId}`,
    //     method: 'PUT',
    //   }),
    //   async onQueryStarted(
    //     { userId, sessionId },
    //     { queryFulfilled, dispatch, getState }
    //   ) {
    //     try {
    //       const session = await queryFulfilled
    //       // Logout Current User If Deactivated Session is Current User
    //       const { auth } = getState()

    //       if (auth?.user?.session === session?.data?._id) {
    //         dispatch(userLoggedOut())
    //       }

    //       dispatch(
    //         apiSlice.util.updateQueryData(
    //           'getActiveSessions',
    //           userId,
    //           (draft) => {
    //             const index = draft.findIndex((item) => item._id == sessionId)
    //             draft.splice(index, 1)
    //           }
    //         )
    //       )
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   },
    // }),
  }),
})

export const {
  useLoginMutation,
  useLoggedInInfoQuery,
  // useLogoutQuery,
  // useGetActiveSessionsQuery,
  // useDeactivateSessionMutation,
} = authApi
