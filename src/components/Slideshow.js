import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Carousel from 'nuka-carousel'

const Slideshow = ({images}) => {
  if (!images || !images.size) {
    return (<></>)
  }

  images = images.map((image, i) => (
    <Img
      key={`image-${i}`}
      fluid={image.childImageSharp.fluid}
      alt={image.description || `Image number ${i} in a slideshow`}
    />
  ))

  if (images.length === 1) {
    return images[0]
  }

  return (
    <Carousel>
      {images}
    </Carousel>
  )
}

Slideshow.propTypes = {
  images: PropTypes.object // FIXME Figure out propType of gatsby-image-fluid
}

export default Slideshow
