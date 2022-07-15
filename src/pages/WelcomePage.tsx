import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAppDispatch } from '../app/hooks'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { useLazyTestAccessQuery } from '../features/weather/weatherAPI'
import { addKey } from '../features/weather/weatherSlice'

const WelcomePage = () => {
  const [testFetch] = useLazyTestAccessQuery()

  const [newKey, setNewKey] = useState('')

  const dispatch = useAppDispatch()

  const submitKeyHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newKey) {
      return
    }

    testFetch(newKey).then(({ isError }) => {
      if (isError) {
        toast.error('Not valid API key!')
        return
      }

      toast.success('API key successfully added!')
      dispatch(addKey(newKey))
    })
  }

  return (
    <div className="flex flex-col justify-center gap-4 text-center">
      <p>
        Please go to{' '}
        <a
          className="underline hover:opacity-50"
          href="https://www.weatherapi.com/"
          target="__blank"
        >
          WeatherAPI
        </a>{' '}
        website and past your API Key
      </p>

      <p>
        You can find API Key on your{' '}
        <a
          className="underline hover:opacity-50"
          href="https://www.weatherapi.com/my/"
          target="__blank"
        >
          profile page
        </a>
      </p>

      <form onSubmit={submitKeyHandler} className="flex gap-4">
        <Input
          type="text"
          value={newKey}
          onChange={({ target: { value } }) => setNewKey(value)}
          placeholder="API Key"
          style={{ flex: 1 }}
        />
        <Button type="submit" style={{ width: 100 }}>
          Add
        </Button>
      </form>
    </div>
  )
}

export default WelcomePage
