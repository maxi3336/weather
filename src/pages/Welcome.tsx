import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addKey } from '../features/weather/weatherSlice'

const Welcome = () => {
  const [newKey, setNewKey] = useState('')

  const dispatch = useAppDispatch()

  const submitKeyHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newKey) {
      return
    }

    dispatch(addKey(newKey))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>
        Please go to{' '}
        <a href="https://www.weatherapi.com/" target="__blank">
          WeatherAPI
        </a>{' '}
        website and past your API Key
      </p>

      <p>
        You can find API Key on your{' '}
        <a href="https://www.weatherapi.com/my/" target="__blank">
          profile page
        </a>
      </p>

      <form onSubmit={submitKeyHandler}>
        <input
          type="text"
          value={newKey}
          onChange={({ target: { value } }) => setNewKey(value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Welcome
