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
  user: null, // User ID
  place: null, //place ID
}

const initialState = {
  feeds: [],
  meta: {},
  queryOptions: queryOptions,
  query: createQueryParams(queryOptions),
}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeeds: (state, action) => {
      state.feeds = action.payload.data
      state.meta = action.payload.meta
    },
    setFeedSearch: (state, action) => {
      state.queryOptions.search = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedPage: (state, action) => {
      state.queryOptions.page = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedLimit: (state, action) => {
      state.queryOptions.limit = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedSortOrder: (state, action) => {
      state.queryOptions.sortOrder = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedSortBy: (state, action) => {
      state.queryOptions.sortBy = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedActive: (state, action) => {
      state.queryOptions.active = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedByUser: (state, action) => {
      state.queryOptions.user = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setFeedByPlace: (state, action) => {
      state.queryOptions.place = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
  },
})

export const {
  setFeeds,
  setFeedSearch,
  setFeedLimit,
  setFeedPage,
  setFeedSortOrder,
  setFeedSortBy,
  setFeedActive,
  setFeedByPlace,
  setFeedByUser,
} = feedSlice.actions
export default feedSlice.reducer
