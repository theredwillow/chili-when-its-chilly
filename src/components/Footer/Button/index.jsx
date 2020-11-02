import React from 'react'
import './index.css'
import Icon from './Icon'

// TODO Add cart quantity tile
// FIXME Add titles to hover
function Button({name, isOpen, handleClick}) {
  return (
    <button
      className={`button ${name}`}
      onClick={handleClick}
    >
      <Icon
        name={name}
        isOpen={isOpen}
      />
    </button>
  )
}

export default Button
