import { useState, Dispatch, SetStateAction, useEffect } from 'react'

const getStorage = function<T>(key: string, defaultValue: T) {
  const result = window.localStorage.getItem(key)
  return result !== null ? JSON.parse(result) : defaultValue
}

const updateStorage = function<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Uses the [Web Storage
 * API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) to
 * keep the state persistent.
 *
 * @param key
 * @param fallbackState
 */
const usePersistentState = function<T>(
  key: string,
  fallbackState: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(getStorage(key, fallbackState))

  useEffect(() => {
    updateStorage(key, state)
  }, [key, state])

  return [state, setState]
}

export default usePersistentState
