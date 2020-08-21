import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getUrlCode = (fallback: string) => {
  const match = window.location.pathname.match(/^\/github-math\/?(.*)/)
  return match ? match[1] : fallback
}

const useUrlState = (
  fallback = ''
): [string, Dispatch<SetStateAction<string>>] => {
  // Get initial value from the URL and update on change
  const [state, setState] = useState(decodeURIComponent(getUrlCode(fallback)))

  useEffect(() => {
    // update the URL
    window.history.replaceState(null, 'math-code', encodeURIComponent(state))
  }, [state])

  return [state, setState]
}

export default useUrlState
