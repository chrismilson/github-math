import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getUrlCode = (fallback: string) => {
  const hash = window.location.hash
  // if the hash is non-empty, there will be a hash at the beginning.
  return hash ? hash.substring(1) : fallback
}

const useUrlState = (
  fallback = ''
): [string, Dispatch<SetStateAction<string>>] => {
  // Get initial value from the URL and update on change
  const [state, setState] = useState(decodeURIComponent(getUrlCode(fallback)))

  useEffect(() => {
    // update the URL
    window.history.replaceState(
      null,
      'math-code',
      state ? `/github-math/#${encodeURIComponent(state)}` : '/github-math'
    )
  }, [state])

  return [state, setState]
}

export default useUrlState
