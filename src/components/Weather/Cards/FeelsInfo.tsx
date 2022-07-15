import { FC, useState } from 'react'
import { CardTitle } from '..'
import { Button } from '../../ui/Button'

export const FeelsInfo: FC<{ feelC: number; feelF: number }> = ({
  feelC,
  feelF
}) => {
  const [isCelsius, setIsCelsius] = useState(true)

  return (
    <div className="flex flex-col gap-2 h-full relative">
      <CardTitle>Feels like:</CardTitle>
      <div className="flex-1 flex items-center gap-2 text-8xl font-thin">
        <span className="tracking-wide">{isCelsius ? feelC : feelF}</span>
        {isCelsius ? '°C' : '°F'}
      </div>

      <Button
        className={`absolute top-0 right-0 text-xs w-4 p-0 flex items-center justify-center ${
          !isCelsius && 'bg-red-200 hover:bg-red-400'
        }`}
        onClick={() => setIsCelsius((prev) => !prev)}
      >
        {isCelsius ? 'C' : 'F'}
      </Button>
    </div>
  )
}
