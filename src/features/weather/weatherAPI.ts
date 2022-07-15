// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeatherQuery } from './types'

interface QueryParams {
  key: string
  city: string
  lang?: string
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' http://api.weatherapi.com/v1'
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<IWeatherQuery, QueryParams>({
      query: ({ key, city, lang = 'ru' }) => ({
        url: '/current.json',
        params: {
          key,
          q: city,
          lang
        }
      })
    })
  })
})

export const { useLazyGetCurrentWeatherQuery } = weatherApi
