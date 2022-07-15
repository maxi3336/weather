// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeatherQuery } from './types'
import { Languages } from './weatherSlice'

interface QueryParams {
  key: string
  city: string
  lang?: Languages
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' https://api.weatherapi.com/v1',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }),
  endpoints: (builder) => ({
    testAccess: builder.query<IWeatherQuery, string>({
      query: (key) => ({
        url: '/current.json',
        params: {
          key,
          q: 'Paris'
        }
      })
    }),
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

export const { useLazyGetCurrentWeatherQuery, useLazyTestAccessQuery } =
  weatherApi
