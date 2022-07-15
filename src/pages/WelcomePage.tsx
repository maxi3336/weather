import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAppDispatch } from '../app/hooks'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { useLazyTestAccessQuery } from '../features/weather/weatherAPI'
import { addKey } from '../features/weather/weatherSlice'
import { useLocale } from '../hooks/useLocale'

const WelcomePage = () => {
  const locale = useLocale()
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
        toast.error(locale.toast.apiKeyError)
        return
      }

      toast.success(locale.toast.apiKeySuccess)
      dispatch(addKey(newKey))
    })
  }

  return (
    <div className="flex flex-col justify-center gap-4 text-center">
      <p>
        {locale.welcome.siteFirstPart}{' '}
        <a
          className="underline hover:opacity-50"
          href="https://www.weatherapi.com/"
          target="__blank"
        >
          WeatherAPI
        </a>{' '}
        {locale.welcome.siteSecondPart}
      </p>

      <p>
        {locale.welcome.profile}{' '}
        <a
          className="underline hover:opacity-50"
          href="https://www.weatherapi.com/my/"
          target="__blank"
        >
          {locale.welcome.profileLink}
        </a>
      </p>

      <form onSubmit={submitKeyHandler} className="flex gap-4">
        <Input
          type="text"
          value={newKey}
          onChange={({ target: { value } }) => setNewKey(value)}
          placeholder={locale.welcome.placeholder}
          className="flex-1"
        />
        <Button type="submit">{locale.welcome.btn}</Button>
      </form>
    </div>
  )
}

export default WelcomePage
