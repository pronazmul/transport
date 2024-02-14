import { apiSlice } from '../api/apiSlice'

export const activityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query({}),
    getActivity: builder.query({}),
    addActivity: builder.mutation({}),
    updateActivity: builder.mutation({}),
    deleteActivity: builder.mutation({}),
  }),
})

export const {
  useGetActivitiesQuery,
  useGetActivityQuery,
  useAddActivityMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation,
} = activityApi
