import { FC } from 'react'
import { CardTitle } from '..'
import { Condition } from '../../../features/weather/types'
import { useLocale } from '../../../hooks/useLocale'

export const ConditionInfo: FC<{ condition: Condition }> = ({
  condition: { text, icon }
}) => {
  const locale = useLocale()

  return (
    <div className="flex flex-col justify-between h-full">
      <CardTitle>{`${locale.condition}:`}</CardTitle>
      <div className="h-full flex items-center">
        <span className="text-5xl font-thin">{text}</span>
        <img
          className="mt-2 ml-auto absolute top-[-0.5rem] right-2"
          src={icon}
          alt="Condition icon"
        />
      </div>
    </div>
  )
}
