import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { LoadingIndicator } from '../components/ui/LoadingIndicator'
import { Weather } from '../components/Weather'
import { useLazyGetCurrentWeatherQuery } from '../features/weather/weatherAPI'
import { removeKey } from '../features/weather/weatherSlice'
import { useDebounce } from '../hooks/useDebounce'

const Loader = () => (
  <div className="h-full w-full flex items-center justify-center">
    <LoadingIndicator />
  </div>
)

const MainPage = () => {
  const key = useAppSelector((state) => state.weather.key)
  const [fetchWeather, { data, isLoading }] = useLazyGetCurrentWeatherQuery()

  const dispatch = useAppDispatch()

  const [cityName, setCityName] = useState('')
  const { value: city, loading: typing } = useDebounce(cityName, 500)

  useEffect(() => {
    if (key && city) {
      fetchWeather({
        key,
        city
      })
    }
  }, [key, city])

  console.log(data)

  const clearKeyHandler = () => {
    dispatch(removeKey())
  }

  return (
    <>
      <div className="w-9/12 h-full py-24 flex flex-col items-center">
        <Input
          placeholder="Type city here..."
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
        Exit
      </Button>
    </>
  )
}

export default MainPage