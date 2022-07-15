import { FC, ReactNode } from 'react'
import { IWeatherQuery } from '../../features/weather/types'
import { ConditionInfo } from './Cards/ConditionInfo'
import { FeelsInfo } from './Cards/FeelsInfo'
import { LocationInfo } from './Cards/LocationInfo'
import { WindInfo } from './Cards/WindInfo'
import { MainInfo } from './MainInfo'

const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative rounded-xl py-4 px-6 shadow bg-slate-100 break-words">
    {children}
  </div>
)

export const CardTitle: FC<{ children: string }> = ({ children }) => (
  <h3 className="font-light text-slate-500">{children}</h3>
)

export const CardInfoRow: FC<{
  title: string
  info: string
  className?: string
}> = ({ title, info, className }) => (
  <div className={`grid grid-cols-[6rem_1fr] items-end ${className}`}>
    <span className="font-light text-xs text-slate-800">{title}:</span>
    <b className="text-xl font-normal ml-auto leading-none">{info}</b>
  </div>
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

  const { location, current } = data

  const {
    temp_c: tempC,
    feelslike_c: feelC,
    feelslike_f: feelF,
    condition,
    wind_degree: wDegree,
    wind_dir: wDir,
    wind_kph: wKph,
    wind_mph: wMph
  } = current

  return (
    <div className="w-full h-full grid grid-rows-[100px_1fr] gap-y-4 overflow-y-auto">
      <MainInfo city={location.name} temperature={tempC} />
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <Card>
          <FeelsInfo feelC={feelC} feelF={feelF} />
        </Card>
        <Card>
          <ConditionInfo condition={condition} />
        </Card>
        <Card>
          <LocationInfo location={location} />
        </Card>
        <Card>
          <WindInfo degree={wDegree} dir={wDir} kph={wKph} mph={wMph} />
        </Card>
      </div>
    </div>
  )
}
