import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { LoadingIndicator } from '../components/ui/LoadingIndicator'
import { Weather } from '../components/Weather'
import { useLazyGetCurrentWeatherQuery } from '../features/weather/weatherAPI'
import { removeKey } from '../features/weather/weatherSlice'
import { useDebounce } from '../hooks/useDebounce'
import { useLanguage } from '../hooks/useLanguage'
import { useLocale } from '../hooks/useLocale'

const Loader = () => (
  <div className="h-full w-full flex items-center justify-center">
    <LoadingIndicator />
  </div>
)

const MainPage = () => {
  const locale = useLocale()
  const { lang } = useLanguage()
  const key = useAppSelector((state) => state.weather.key)
  const [fetchWeather, { data, isLoading }] = useLazyGetCurrentWeatherQuery()

  const dispatch = useAppDispatch()

  const [cityName, setCityName] = useState(
    localStorage.getItem('draft:city') ?? ''
  )
  const { value: city, loading: typing } = useDebounce(cityName, 500)

  useEffect(() => {
    if (key && city) {
      fetchWeather({
        key,
        city,
        lang
      }).then(({ isSuccess }) => {
        if (isSuccess) {
          localStorage.setItem('draft:city', city)
        }
      })
    }
  }, [key, city, lang])

  const clearKeyHandler = () => {
    dispatch(removeKey())
  }

  return (
    <>
      <div className="w-6/12 h-full py-24 flex flex-col items-center">
        <Input
          placeholder={locale.main.search}
          type="text"
          value={cityName}
          onChange={({ target: { value } }) => setCityName(value)}
          className="w-2/5 mb-12"
        />

        {typing || isLoading ? (
          <Loader />
        ) : (
          <Weather data={data} value={cityName} />
        )}
      </div>

      <Button className="absolute top-4 right-8" onClick={clearKeyHandler}>
        {locale.exit}
      </Button>
    </>
  )
}

export default MainPage
