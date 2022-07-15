import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { Button } from './components/ui/Button'
import { LoadingIndicator } from './components/ui/LoadingIndicator'
import { useLazyTestAccessQuery } from './features/weather/weatherAPI'
import { removeKey } from './features/weather/weatherSlice'
import { useLanguage } from './hooks/useLanguage'
import MainPage from './pages/MainPage'
import WelcomePage from './pages/WelcomePage'

const wrapperClassName =
  'w-screen h-screen relative flex items-center justify-center'

const App = () => {
  const key = useAppSelector((state) => state.weather.key)

  const [testFetch] = useLazyTestAccessQuery()
  const [loading, setLoading] = useState(false)

  const { lang, toggle } = useLanguage()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const testKey = async () => {
      setLoading(true)

      await testFetch(key).then(({ isError }) => {
        if (isError) {
          dispatch(removeKey())
        }
      })

      setLoading(false)
    }

    key && testKey()
  }, [key])

  if (loading) {
    return (
      <div className={wrapperClassName}>
        <LoadingIndicator />
      </div>
    )
  }

  return (
    <div className={wrapperClassName}>
      {key ? <MainPage /> : <WelcomePage />}

      <Button className="absolute top-4 left-8" onClick={toggle}>
        {lang}
      </Button>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            padding: '20px 25px'
          }
        }}
      />
    </div>
  )
}

export default App
