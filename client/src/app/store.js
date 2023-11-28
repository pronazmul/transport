import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./../features/api/apiSlice"
import AuthReducer from "../features/auth/authSlice"


export const store = configureStore({
reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:AuthReducer
},
devTools:process.env.NODE_ENV !== 'production', 
middleware:(getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})


