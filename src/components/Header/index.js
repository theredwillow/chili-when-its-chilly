import React from 'react'
import './index.css'
import './animations.css'
import Logo from './Logo'
import Sticky from 'react-sticky-fill'

// FIXME I appears when window is shrunk

const Header = () => (
  <Sticky id="header">
    <div className="main-display">
      <Logo />
      (Guitar here)
    </div>
  </Sticky>
)

export default Header
