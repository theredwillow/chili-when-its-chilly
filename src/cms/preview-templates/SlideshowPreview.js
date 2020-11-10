import React from 'react'
import PropTypes from 'prop-types'
import Slideshow from '../../components/Slideshow'

const SlideshowPreview = ({ entry, widgetFor }) => {
  debugger
  return (
    <Slideshow
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

SlideshowPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SlideshowPreview
