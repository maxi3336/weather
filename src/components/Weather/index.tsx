import { FC, ReactNode } from 'react'
import { IWeatherQuery } from '../../features/weather/types'

const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="h-full border-2 border-red-400">{children}</div>
)

export const Weather: FC<{ data?: IWeatherQuery; value: string }> = ({
  data,
  value
}) => {
  console.log(data)

  if (!data) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-gray-500">
        <p>No weather data</p>
        {value && <p>Try to enter other city</p>}
      </div>
    )
  }

  return (
    <div className="border-4 border-red-600 w-full h-full grid gap-4 grid-cols-3 grid-rows-3">
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
      <Card>
        <h1>Card</h1>
      </Card>
      <Card>
        <h1>Card</h1>
      </Card>
    </div>
  )
}
