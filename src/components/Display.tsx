import React from 'react'
import useDebounced from '../hooks/useDebounced'
import addTextToClipboard from '../common/addTextToClipboard'
import './Display.css'

/**
 * When given LaTeX math code, will fetch the rendered image from github's API
 * and display it.
 */
const Display: React.FC<{ url: string }> = ({ url }) => {
  const debouncedUrl = useDebounced(url)

  return (
    <div className="Display">
      <img
        title="Copy url to clipboard"
        src={debouncedUrl}
        alt="Rendered LaTeX"
        onClick={() => {
          // console.log(`I want to add ${url} to your keyboard.`)
          addTextToClipboard(debouncedUrl)
        }}
      />
    </div>
  )
}

export default Display
