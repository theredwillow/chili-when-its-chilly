import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Brush from './Brush'

const Section = ({children, isFirst, isLast}) => (
  <div className={`section ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`}>
    <div className="brush-stroke before">
      <Brush />
      <Brush />
      <Brush />
    </div>
    {children}
    <div className="brush-stroke after">
      <Brush />
      <Brush />
    </div>
  </div>
)

Section.propTypes = {
  children: PropTypes.node,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
}

export default Section
