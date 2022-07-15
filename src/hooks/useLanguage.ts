import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Languages, toggleLanguage } from '../features/weather/weatherSlice'

export const useLanguage = () => {
  const lang = useAppSelector((state) => state.weather.lang)
  const [language, setLanguage] = useState<Languages>(lang)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setLanguage(lang)
  }, [lang])

  const toggleLanguageHandler = () => {
    dispatch(toggleLanguage())
  }

  return { lang: language, toggle: toggleLanguageHandler }
}
