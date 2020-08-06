import React, { useRef, useEffect, useState } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-latex'
import 'ace-builds/src-noconflict/theme-github'

const Editor: React.FC<{
  code?: string
  onChange?: (value: string, event?: any) => void
}> = ({ code, onChange }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height }, setSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const resetSize = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth
        const height = ref.current.offsetHeight
        setSize({ width, height })
      }
    }
    resetSize()
    window.addEventListener('resize', resetSize)
    return () => window.removeEventListener('resize', resetSize)
  }, [ref])

  return (
    <div ref={ref} className="Editor">
      <AceEditor
        name="latex-input"
        placeholder="Enter LaTeX math code here..."
        theme="github"
        mode="latex"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        value={code}
        width={`${width - 20}px`}
        height={`${height - 20}px`}
      />
    </div>
  )
}

export default Editor