import React, { useEffect } from 'react'
import addTextToClipboard from './common/addTextToClipboard'
import LaTeXEditor from './components/Editor'
import Display from './components/Display'
import useUrlState from './hooks/useUrlState'
import encodeUrl from './common/encodeUrl'
import './App.css'

const App: React.FC = () => {
  // The default code is a simple mathematical fact
  // const [code, setCode] = usePersistentState('code', '')
  const [code, setCode] = useUrlState()

  const url = encodeUrl(code.trim())

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
      <h4>
        <a
          className="subtitle"
          href="https://github.com/chrismilson/github-math#readme"
        >
          What is this?
        </a>
      </h4>
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

export default App
