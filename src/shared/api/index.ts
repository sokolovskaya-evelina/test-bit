import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'post',
    baseQuery:fetchBaseQuery({baseUrl:'https://test.gefara.xyz/api/v1/'}),
    endpoints: (build) => ({
        getUsers: build.query<UserResponseType, { page?: number, search?: string }>({
            query: ({page = 1, search = ''}) => ({
                url: '/user/list',
                params:
                    {
                        page,
                        search,
                    }
            })
        }),
    })
})

interface ISubscription {
    tokens: number
    plan: {
        type: string
    }
}

export interface IUser {
    email: string
    id: string
    name: string
    role: string
    subscription: ISubscription
}

type UserResponseType = {
    data: IUser[]
    pages: number
}

export const {useGetUsersQuery} = userApi