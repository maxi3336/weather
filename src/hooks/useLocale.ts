import { Languages } from '../features/weather/weatherSlice'
import { useLanguage } from './useLanguage'

interface LocalesList {
  welcome: {
    siteFirstPart: string
    siteSecondPart: string
    profile: string
    profileLink: string
    placeholder: string
    btn: string
  }
  exit: string
  feelsLike: string
  condition: string
  location: {
    title: string
    country: string
    region: string
    name: string
    localTime: string
  }
  wind: {
    title: string
    direction: string
    directionDegrees: string
    speedKm: string
    speedMiles: string
  }
  kph: string
  mph: string
  toast: {
    apiKeyError: string
    apiKeySuccess: string
  }
  main: {
    empty: string
    reenter: string
  }
}

type ILocale = {
  // eslint-disable-next-line no-unused-vars
  [key in Languages]: LocalesList
}

export const locales: ILocale = {
  [Languages.ru]: {
    exit: 'Выход',
    welcome: {
      siteFirstPart: 'Пожалуйтса перейдите на сайт',
      siteSecondPart: 'и вставьте свой API Key',
      profile: 'Вы можете найти свой API Key на',
      profileLink: 'странице профиля',
      placeholder: 'Введите API Key здесь...',
      btn: 'Добавить'
    },
    feelsLike: 'Ощущается',
    condition: 'Условия',
    location: {
      title: 'Локация',
      country: 'Страна',
      region: 'Регион',
      name: 'Название',
      localTime: 'Локальное время'
    },
    wind: {
      title: 'Ветер',
      direction: 'Направление',
      directionDegrees: 'Направление (градусы)',
      speedKm: 'Скорость (километры)',
      speedMiles: 'Скорость (мили)'
    },
    kph: 'км/ч',
    mph: 'м/ч',
    toast: {
      apiKeyError: 'Неправильно указан API Key',
      apiKeySuccess: 'API Key успешно добавлен'
    },
    main: {
      empty: 'Данных по погоде не найдено',
      reenter: 'Попробуйте ввести другой город'
    }
  },
  [Languages.en]: {
    exit: 'Exit',
    welcome: {
      siteFirstPart: 'Please go to',
      siteSecondPart: 'website and past your API Key',
      profile: 'You can find API Key on your',
      profileLink: 'profile page',
      placeholder: 'Type API Key here...',
      btn: 'Add'
    },
    feelsLike: 'Feels like',
    condition: 'Condition',
    location: {
      title: 'Location',
      country: 'Country',
      region: 'Region',
      name: 'Name',
      localTime: 'Local Time'
    },
    wind: {
      title: 'Wind info',
      direction: 'Direction',
      directionDegrees: 'Direction (degrees)',
      speedKm: 'Speed (kilometers)',
      speedMiles: 'Speed (miles)'
    },
    kph: 'km/h',
    mph: 'm/h',
    toast: {
      apiKeyError: 'Not valid API key!',
      apiKeySuccess: 'API key successfully added'
    },
    main: {
      empty: 'No weather data',
      reenter: 'Try to enter other city'
    }
  }
}

export const useLocale = (): LocalesList => {
  const { lang } = useLanguage()
  return locales[lang]
}
