import React from 'react'
import './index.css'
import './animations.css'
import Logo from './Logo'

// FIXME I appears when window is shrunk

const Header = () => (
  <div id="header">
    <div className="main-display">
      <Logo />
      (Guitar here)
    </div>
  </div>
)

export default Header
