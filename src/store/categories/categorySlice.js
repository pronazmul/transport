import { createSlice } from '@reduxjs/toolkit'
import QueryParamUtils from './../../shared/utils/queryParam.utils'

const { createQueryParams } = QueryParamUtils

const queryOptions = {
  page: 1,
  search: null,
  limit: 10,
  sortOrder: 'desc', // asc|desc
  sortBy: 'createdAt', // createdAt|updatedAt
  active: null, // true|false,
}

const initialState = {
  categories: [],
  meta: {},
  queryOptions: queryOptions,
  query: createQueryParams(queryOptions),
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.data
      state.meta = action.payload.meta
    },
    setCategorySearch: (state, action) => {
      state.queryOptions.search = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setCategoryPage: (state, action) => {
      state.queryOptions.page = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setCategoryLimit: (state, action) => {
      state.queryOptions.limit = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setCategorySortOrder: (state, action) => {
      state.queryOptions.sortOrder = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setCategorySortBy: (state, action) => {
      state.queryOptions.sortBy = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setCategoryActive: (state, action) => {
      state.queryOptions.active = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
  },
})

export const {
  setCategories,
  setCategorySearch,
  setCategoryPage,
  setCategoryLimit,
  setCategorySortBy,
  setCategorySortOrder,
  setCategoryActive,
} = categorySlice.actions
export default categorySlice.reducer
