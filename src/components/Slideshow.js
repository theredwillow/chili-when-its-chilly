import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

const Slideshow = ({images}) => {
  if (!images || !images.length) {
    return (
      <div>
        (A slideshow will appear here when images are added.)
      </div>
    )
  }

  images = images.map((image, i) => (
    <img
      key={`image-${i}`}
      src={image}
      alt={image}
    />
  ))

  return (
    <Carousel>
      {images}
    </Carousel>
  )
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string
  ),
}

export default Slideshow
