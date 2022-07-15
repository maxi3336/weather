import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { useLazyGetCurrentWeatherQuery } from '../features/weather/weatherAPI'
import { useDebounce } from '../hooks/useDebounce'

const Main = () => {
  const key = useAppSelector((state) => state.weather.key)
  const [fetchWeather, { data }] = useLazyGetCurrentWeatherQuery()

  const [cityName, setCityName] = useState('')
  const { value: city, loading } = useDebounce(cityName, 500)

  useEffect(() => {
    if (key && city) {
      fetchWeather({
        key,
        city
      })
    }
  }, [key, city])

  console.log(data)

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={({ target: { value } }) => setCityName(value)}
      />

      <div style={{ marginTop: '2rem' }}>
        {loading ? <h1>Loading</h1> : !data ? <h1>Empty</h1> : <h1>Data!</h1>}
      </div>
    </div>
  )
}

export default Main
