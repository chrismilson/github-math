import React, { useState, useLayoutEffect } from 'react'
import useDebounced from '../../hooks/useDebounced'
import addTextToClipboard from '../../common/addTextToClipboard'
import './Display.css'
import Fallback from './Fallback'

/**
 * When given LaTeX math code, will fetch the rendered image from github's API
 * and display it.
 */
const Display: React.FC<{ url: string }> = ({ url }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const debouncedUrl = useDebounced(url)

  useLayoutEffect(() => {
    setError(false)
    setLoading(true)
  }, [debouncedUrl])

  return (
    <div className={'Display' + (loading ? ' loading' : '')}>
      {loading && <div className="Loading">Loading...</div>}
      {error ? (
        <Fallback />
      ) : (
        <img
          className="Image"
          title="Copy url to clipboard"
          src={debouncedUrl}
          alt="Rendered LaTeX"
          onClick={() => {
            // console.log(`I want to add ${url} to your keyboard.`)
            addTextToClipboard(debouncedUrl)
          }}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
          onLoad={() => {
            setLoading(false)
          }}
        />
      )}
    </div>
  )
}

export default Display
