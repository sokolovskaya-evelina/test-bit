import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({baseUrl: 'https://test.gefara.xyz/api/v1/'}),
    endpoints: (build) => ({
        getUsers: build.query<UserResponseType, IQuery>({
            query: ({page = 1, search = '', orderBy = ''}) => ({
                url: '/user/list',
                params:
                    {
                        page,
                        search,
                        orderBy: `tokens:${orderBy}`
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

export type OrderType = 'asc' | 'desc'

export interface IQuery {
    page?: number
    search?: string
    orderBy?: OrderType
}

export const {useGetUsersQuery} = userApi