/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export enum Languages {
  ru = 'ru',
  en = 'en'
}

interface WeatherState {
  key: string
  lang: Languages
}

const initialState: WeatherState = {
  key: localStorage.getItem('key') ?? '',
  lang: (localStorage.getItem('lang') as Languages) ?? 'ru'
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addKey: (state, action: PayloadAction<string>) => {
      state.key += action.payload
      localStorage.setItem('key', action.payload)
    },
    removeKey: (state) => {
      state.key = ''
      localStorage.removeItem('key')
    },
    toggleLanguage: (state) => {
      if (state.lang === Languages.en) {
        state.lang = Languages.ru
        localStorage.setItem('lang', Languages.ru)
      } else {
        state.lang = Languages.en
        localStorage.setItem('lang', Languages.en)
      }
    }
  }
})

export const { addKey, removeKey, toggleLanguage } = weatherSlice.actions

export const selectKey = (state: RootState) => state.weather.key

export default weatherSlice.reducer
