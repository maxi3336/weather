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
      <CardTitle>{`${locale.windInfo}:`}</CardTitle>
      <div className="flex flex-col justify-around h-full">
        <CardInfoRow
          title={locale.direction}
          info={humanDirection[dir as keyof typeof humanDirection] ?? dir}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.directionDegrees}
          info={`${degree}°`}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.speedKm}
          info={`${kph} km/h`}
        />
        <CardInfoRow
          className="grid-cols-[7rem_1fr]"
          title={locale.speedMiles}
          info={`${mph} m/h`}
        />
      </div>
    </div>
  )
}
