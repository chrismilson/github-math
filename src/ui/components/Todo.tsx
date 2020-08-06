import React from 'react'

interface Props {
  onClick: () => void
  completed: boolean
  text: string
}

const Todo: React.FC<Props> = (props: Props) => {
  const { onClick, completed, text } = props

  return (
    <li
      onClick={onClick}
      className="Todo"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  )
}

export default Todo
