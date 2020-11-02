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
  if (selected === "cause") {
    modalToDisplay = <TheCause />
  }
  else if (selected === "cart") {
    modalToDisplay = <ShoppingCart />
  }
  else if (selected === "menu") {
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
