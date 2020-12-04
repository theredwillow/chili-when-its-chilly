import React from 'react'
import { Link } from 'gatsby'
import './index.css'
import './animations.css'
import Logo from './Logo'
import AMajorFunding from './amajorfundinginc.svg'

const Header = () => (
  <div id="header">
    <Link to="/" id="logo">
      <Logo />
    </Link>
    <a href="https://www.amajorfunding.com/" target="_blank" rel="noreferrer">
      <img id="a-major-funding-logo" src={AMajorFunding} alt="The logo for A Major Funding Inc." />
    </a>
  </div>
)

export default Header
