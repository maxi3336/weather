import { Languages } from '../features/weather/weatherSlice'
import { useLanguage } from './useLanguage'

interface LocalesList {
  exit: string
  feelsLike: string
  condition: string
  location: string
  windInfo: string
  country: string
  region: string
  name: string
  localTime: string
  direction: string
  directionDegrees: string
  speedKm: string
  kph: string
  speedMiles: string
  mph: string
}

type ILocale = {
  // eslint-disable-next-line no-unused-vars
  [key in Languages]: LocalesList
}

export const locales: ILocale = {
  [Languages.ru]: {
    exit: 'Выход',
    feelsLike: 'Ощущается',
    condition: 'Условия',
    location: 'Локация',
    windInfo: 'Ветер',
    country: 'Страна',
    region: 'Регион',
    name: 'Название',
    localTime: 'Локальное время',
    direction: 'Направление',
    directionDegrees: 'Направление (градусы)',
    speedKm: 'Скорость (километры)',
    kph: 'км/ч',
    speedMiles: 'Скорость (мили)',
    mph: 'м/ч'
  },
  [Languages.en]: {
    exit: 'Exit',
    feelsLike: 'Feels like',
    condition: 'Condition',
    location: 'Location',
    windInfo: 'Wind info',
    country: 'Country',
    region: 'Region',
    name: 'Name',
    localTime: 'Local Time',
    direction: 'Direction',
    directionDegrees: 'Direction (degrees)',
    speedKm: 'Speed (kilometers)',
    kph: 'km/h',
    speedMiles: 'Speed (miles)',
    mph: 'm/h'
  }
}

export const useLocale = (): LocalesList => {
  const { lang } = useLanguage()
  return locales[lang]
}
