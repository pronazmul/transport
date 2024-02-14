import { apiSlice } from '../api/apiSlice'
import { setFeeds } from './feedSlice'

export const feedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeeds: builder.query({
      query: (params) => ({
        url: `/feeds?${params || ''}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Feeds'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(setFeeds(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    getFeed: builder.query({
      query: () => {},
      providesTags: ['Feeds'],
    }),
    addFeed: builder.mutation({
      query: (data) => ({
        url: `/feeds`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['Feeds'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    updateFeed: builder.mutation({
      query: ({ data, feedId }) => ({
        url: `/feeds/${feedId}`,
        method: 'PUT',
        body: data,
      }),
      providesTags: ['Feeds'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    deleteFeed: builder.mutation({
      query: (feedId) => ({
        url: `/feeds/${feedId}`,
        method: 'DELETE',
      }),
      providesTags: ['Feeds'],
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
  useGetFeedsQuery,
  useGetFeedQuery,
  useAddFeedMutation,
  useUpdateFeedMutation,
  useDeleteFeedMutation,
} = feedApi
