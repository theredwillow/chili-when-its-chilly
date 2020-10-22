import React from 'react'
import './index.css'
import './animations.css'
import Logo from './Logo'
import Sticky from 'react-sticky-fill'

const Header = () => (
  <Sticky id="header">
    <div className="main-display">
      <Logo />
      (Guitar here)
    </div>
  </Sticky>
)

export default Header
