import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Carousel from 'nuka-carousel'

const Slideshow = ({images}) => {
  if (!images || !images.length) {
    return (<></>)
  }

  images = images.map((image, i) => (
    <PreviewCompatibleImage
      key={`image-${i}`}
      image={image.src}
      alt={image.description || `Image number ${i} in a slideshow`}
    />
  ))

  if (images.length === 1) {
    return images[0]
  }

  return (
    <Carousel autoplay={true} transitionMode="fade">
      {images}
    </Carousel>
  )
}

Slideshow.propTypes = {
  images: PropTypes.array
}

export default Slideshow
