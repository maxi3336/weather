import { useAppSelector } from './app/hooks'
import Main from './pages/Main'
import Welcome from './pages/Welcome'

const App = () => {
  const key = useAppSelector((state) => state.weather.key)

  if (!key) {
    return <Welcome />
  }

  return <Main />
}

export default App
