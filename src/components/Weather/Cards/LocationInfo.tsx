import { FC } from 'react'
import { CardInfoRow, CardTitle } from '..'
import { Location } from '../../../features/weather/types'
import { useLocale } from '../../../hooks/useLocale'

export const LocationInfo: FC<{ location: Location }> = ({
  location: { region, country, localtime, name }
}) => {
  const locale = useLocale()

  return (
    <div className="flex flex-col justify-between h-full">
      <CardTitle>{`${locale.location}:`}</CardTitle>
      <div className="h-full flex flex-col justify-around mt-4">
        <CardInfoRow title={locale.country} info={country} />
        <CardInfoRow title={locale.region} info={region} />
        <CardInfoRow title={locale.name} info={name} />
        <CardInfoRow title={locale.localTime} info={localtime.split(' ')[1]} />
      </div>
    </div>
  )
}
