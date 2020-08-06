import { useState, useEffect } from 'react'

const useDebounced = function<T>(target: T, delay = 500): T {
  const [value, setValue] = useState<T>(target)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(target)
    }, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [target, delay])

  return value
}

export default useDebounced
