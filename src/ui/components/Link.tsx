import React from 'react'

interface Props {
  active: boolean
  onClick: () => void
}

const Link: React.FC<Props> = props => {
  const { children, onClick, active } = props

  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: '4px' }}>
      {children}
    </button>
  )
}

export default Link
