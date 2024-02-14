import { apiSlice } from '../api/apiSlice'
import { setUsers } from './usersSlice'

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        url: `/users?${params || ''}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Users'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(setUsers(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    getUser: builder.query({}),
    addUsers: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['Users'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    updateUsers: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: data,
      }),
      providesTags: ['Users'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    deleteUsers: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      providesTags: ['Users'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
  }),
})

export const {
  useGetUsersQuery,
  useAddUsersMutation,
  useUpdateUsersMutation,
  useDeleteUsersMutation,
} = usersApi
