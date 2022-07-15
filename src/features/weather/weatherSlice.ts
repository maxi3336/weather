import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface WeatherState {
  key: string
}

const initialState: WeatherState = {
  key: localStorage.getItem('key') ?? ''
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
    }
  }
})

export const { addKey, removeKey } = weatherSlice.actions

export const selectKey = (state: RootState) => state.weather.key

export default weatherSlice.reducer
