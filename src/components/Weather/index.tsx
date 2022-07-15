import { FC, ReactNode } from 'react'
import { IWeatherQuery } from '../../features/weather/types'
import { ConditionInfo } from './Cards/ConditionInfo'
import { FeelsInfo } from './Cards/FeelsInfo'
import { MainInfo } from './MainInfo'

const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative rounded-xl py-4 px-6 shadow bg-slate-100">{children}</div>
)

export const CardTitle: FC<{ children: string }> = ({ children }) => (
  <h3 className="font-light text-slate-500">{children}</h3>
)

export const Weather: FC<{ data?: IWeatherQuery; value: string }> = ({
  data,
  value
}) => {
  if (!data) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-gray-500">
        <p>No weather data</p>
        {value && <p>Try to enter other city</p>}
      </div>
    )
  }

  const { location, current: weather } = data

  return (
    <div className="w-full h-full grid grid-rows-[100px_1fr] gap-y-4">
      <MainInfo city={location.name} temperature={weather.temp_c} />
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <Card>
          <FeelsInfo feelC={weather.feelslike_c} feelF={weather.feelslike_f} />
        </Card>
        <Card>
          <ConditionInfo condition={weather.condition} />
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
        <Card>
          <h1>Card</h1>
        </Card>
      </div>
    </div>
  )
}
