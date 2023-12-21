import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'post',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        getUsers: build.query<any[], { limit: number, start: number }>({
            query: ({limit = 15, start = 0}) => ({
                url: '/posts',
                params:
                    {
                        _limit: limit,
                        _start: start,
                    }
            })
        }),
    })
})

export const {useGetUsersQuery} = userApi