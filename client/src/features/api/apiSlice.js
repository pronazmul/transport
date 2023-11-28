import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl:process.env.REACT_APP_API_URL,
    prepareHeaders: async(headers, {getState, endpoint})=>{
        const token  = getState()?.auth?.accessToken
        if(token){
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
    credentials:'include'
})

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: async (args, api, extraOptions)=>{
        let result = await baseQuery(args, api, extraOptions)
        // if(result?.error?.status === 401){
        //     api.dispatch()
        //     localStorage.removeItem('auth')
        // }
        return result
    },
    tagTypes:[],
    endpoints:(builder)=>({})
})