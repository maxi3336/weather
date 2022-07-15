import { FC } from 'react'
import { CardInfoRow, CardTitle } from '..'
import { useLocale } from '../../../hooks/useLocale'

const humanDirection = {
  S: 'South',
  N: 'North',
  W: 'West',
  E: 'East'
}

export const WindInfo: FC<{
  degree: number
  dir: string
  kph: number
  mph: number
}> = ({ degree, dir, kph, mph }) => {
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-4 h-full">
      <CardTitle>{`${locale.wind.title}:`}</CardTitle>
      <div className="flex flex-col justify-around h-full">
        <CardInfoRow
          title={locale.wind.direction}
          info={humanDirection[dir as keyof typeof humanDirection] ?? dir}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.wind.directionDegrees}
          info={`${degree}°`}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.wind.speedKm}
          info={`${kph} ${locale.kph}`}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.wind.speedMiles}
          info={`${mph} ${locale.mph}`}
        />
      </div>
    </div>
  )
}
