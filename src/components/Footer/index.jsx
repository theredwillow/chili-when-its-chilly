import React from 'react'
import './index.css'
import Button from '../Footer/Button'

const Footer = ({modalOpen, toggleModalOpen}) => (
  <footer>
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
  </footer>
)

export default Footer
