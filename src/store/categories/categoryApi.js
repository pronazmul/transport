import { apiSlice } from '../api/apiSlice'
import { setCategories } from './categorySlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (params) => ({
        url: `/categories?${params || ''}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Categories'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(setCategories(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    getCategory: builder.query({
      query: () => {},
      providesTags: ['Categories'],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['Categories'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    updateCategory: builder.mutation({
      query: ({ categoryId, data }) => ({
        url: `/categories/${categoryId}`,
        method: 'PUT',
        body: data,
      }),
      providesTags: ['Categories'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'DELETE',
      }),
      providesTags: ['Categories'],
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
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi
