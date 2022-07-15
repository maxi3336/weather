import { FC } from 'react'

export const MainInfo: FC<{ city: string; temperature: number }> = ({
  city,
  temperature
}) => {
  return (
    <div className="flex items-center justify-center gap-4 text-5xl px-12">
      <span>{city},</span>
      <span>{temperature}°</span>
    </div>
  )
}
