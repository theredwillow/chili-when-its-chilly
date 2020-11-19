import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Carousel from 'nuka-carousel'

const Slideshow = ({images}) => {
  if (!images || !images.length) {
    return (<></>)
  }

  images = images.map((image, i) => (
    <Img
      key={`image-${i}`}
      fluid={image.src.childImageSharp.fluid}
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
