import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay = 300) => {
  const [loading, setLoading] = useState(false)
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      setLoading(true)

      const handler = setTimeout(() => {
        setDebouncedValue(value)
        setLoading(false)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )

  return { value: debouncedValue, loading }
}
