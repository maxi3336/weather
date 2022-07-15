import { FC } from 'react'
import { CardTitle } from '..'
import { Condition } from '../../../features/weather/types'

export const ConditionInfo:FC<{ condition: Condition }> = ({
  condition: {
    text,
    icon
  }
}) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <CardTitle>Condition:</CardTitle>
      <div className='h-full flex items-center'>
        <span className='text-5xl font-thin'>{text}</span>
        <img className='mt-2 ml-auto absolute bottom-[-0.5rem] right-0' src={icon} alt="Condition icon" />
      </div>
    </div>
  )
}
