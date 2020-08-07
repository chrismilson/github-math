import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import addTextToClipboard from './common/addTextToClipboard'
import LaTeXEditor from './components/Editor'
import Display from './components/Display'
import './index.css'
import usePersistentState from './hooks/usePersistentState'

const defaultCode = `\\begin{split}
    2^{n\\cdot k} &= (1 + (2^n - 1))^k \\\\
    &\\equiv 1 \\mod 2^n - 1
\\end{split}`

/**
 * Takes raw latex code and encodes it into a url for Github's latex math
 * rendering API.
 *
 * @param code The raw latex code
 */
const encodeUrl = (code: string) => {
  const baseUrl = 'https://render.githubusercontent.com/render/math?math='
  return baseUrl + encodeURIComponent(code)
}

const App: React.FC = () => {
  // The default code is a simple mathematical fact
  const [code, setCode] = usePersistentState('code', defaultCode)
  const url = encodeUrl(code)

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (
        e.key === 's' &&
        e.getModifierState(
          navigator.userAgent.indexOf('Mac OS X') !== -1 ? 'Meta' : 'Control'
        )
      ) {
        e.preventDefault()
        addTextToClipboard(url)
      }
    }
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [url])

  // const explanation = useMemo(() => {
  //   if (window.innerWidth <= 800 || window.innerHeight <= 600) {
  //     return
  //   } else {
  //     const key =
  //       navigator.userAgent.indexOf('Mac OS X') !== -1 ? 'Command' : 'Ctrl'
  //     return (
  //       <h3>
  //         Pressing <kbd>{key}</kbd> + <kbd>S</kbd> or clicking the preview image
  //         will add the url to your clipboard.
  //       </h3>
  //     )
  //   }
  // }, [])

  return (
    <div className="App">
      <h1>Github Math</h1>
      <LaTeXEditor
        code={code}
        onChange={value => {
          setCode(value)
        }}
      />
      <h3>Click the preview image to add the url to your clipboard.</h3>
      <Display url={url} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
