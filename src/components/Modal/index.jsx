import React from 'react'
import './index.css'
import TheCause from './TheCause'
import ShoppingCart from './ShoppingCart'
import Menu from './Menu'

// FIXME Hide the modal, it pops out sometimes when resizing the window

function Modal({selected, handleClose}) {
  const CloseButton = () => {
    return (
      <button
        className='close-button'
        onClick={handleClose}
      >
        X
      </button>
    )
  }

  let modalToDisplay = (<></>)
  if (/cause/.test(selected)) {
    modalToDisplay = <TheCause />
  }
  else if (/cart/.test(selected)) {
    modalToDisplay = <ShoppingCart />
  }
  else if (/menu/.test(selected)) {
    modalToDisplay = <Menu />
  }

  return (
    <div id='modal' className={`${selected} main-display`}>
      <CloseButton />
      {modalToDisplay}
    </div>
  )
}

export default Modal
