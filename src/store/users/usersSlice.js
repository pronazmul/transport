import { createSlice } from '@reduxjs/toolkit'
import QueryParamUtils from './../../shared/utils/queryParam.utils'

const { createQueryParams } = QueryParamUtils

const queryOptions = {
  page: 1,
  search: null,
  limit: 10,
  sortOrder: 'desc', // asc|desc
  sortBy: 'createdAt', // followerCount|followingCount|bookmarkCount|favoriteCount|noteCount|shareCount|createdAt|updatedAt
  type: null, // admin|user|app|media|list
  active: null, // true|false,
}

const initialState = {
  users: [],
  meta: {},
  queryOptions: queryOptions,
  query: createQueryParams(queryOptions),
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.data
      state.meta = action.payload?.meta
    },
    setUserSearch: (state, action) => {
      state.queryOptions.search = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserPage: (state, action) => {
      state.queryOptions.page = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserLimit: (state, action) => {
      state.queryOptions.limit = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserSortOrder: (state, action) => {
      state.queryOptions.sortOrder = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserSortBy: (state, action) => {
      state.queryOptions.sortBy = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserType: (state, action) => {
      state.queryOptions.type = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
    setUserActive: (state, action) => {
      state.queryOptions.active = action.payload
      state.query = createQueryParams(state.queryOptions)
    },
  },
})

export const {
  setUsers,
  setUserSearch,
  setUserPage,
  setUserLimit,
  setUserSortOrder,
  setUserSortBy,
  setUserType,
  setUserActive,
} = usersSlice.actions

export default usersSlice.reducer
