import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../../shared/api'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware)
})