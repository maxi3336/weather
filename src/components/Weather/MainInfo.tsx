import { FC } from 'react'

export const MainInfo: FC<{ city: string; temperature: number }> = ({
  city,
  temperature
}) => {
  return (
    <div className="flex items-center justify-center gap-4 text-6xl px-12 font-light">
      <span>{city},</span>
      <span>{temperature}°</span>
    </div>
  )
}
