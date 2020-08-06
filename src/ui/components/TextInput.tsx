import React, { useState } from 'react'

interface Props {
  label: string
  onSubmit: (text: string) => void
}

const TextInput: React.FC<Props> = props => {
  const { label, onSubmit } = props
  const [input, setInput] = useState<string>('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(input.trim())
        setInput('')
      }}
    >
      <label>
        {label}
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default TextInput
