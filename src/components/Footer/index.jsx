import React, {useState} from 'react'
import './index.css'
import Button from './Button'
import Modal from './Button/Modal'

const ANIMATION_TIME = 1000;

function Footer() {
  const [modalOpen, setModalOpen] = useState('closed')
  const toggleModalOpen = (modalName) => {
    if (new RegExp(modalName).test(modalOpen)) {
      setModalOpen(`closing ${modalName}`)
      setTimeout(() => setModalOpen('closed'), ANIMATION_TIME)
    }
    else {
      setModalOpen(`opening ${modalName}`)
      setTimeout(() => setModalOpen(modalName), 1)
    }
  }
  return (
    <>
      <div id="footer">
        <div id="button-tray" className="main-display">
          <Button
            name="cause"
            isOpen={modalOpen === 'cause'}
            handleClick={() => toggleModalOpen('cause')}
          />
          <Button
            name="cart"
            isOpen={modalOpen === 'cart'}
            handleClick={() => toggleModalOpen('cart')}
          />
          <Button
            name="menu"
            isOpen={modalOpen === 'menu'}
            handleClick={() => toggleModalOpen('menu')}
          />
        </div>
      </div>
      <Modal
        selected={modalOpen}
        handleClose={() => setModalOpen('closed')}
      />
    </>
  )
}

export default Footer
