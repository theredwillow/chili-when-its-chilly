import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

const Slideshow = ({images}) => {
  if (images) {
    if (images.toJS) {
      images = images.toJS()
    }
    images = images.filter(image => image.src)
  }

  if (!images || !images.length) {
    return (<></>)
  }

  images = images.map((image, i) => {
    if (image.src && image.src.childImageSharp) {
      image.src = image.src.childImageSharp.fluid.src
    }
    return (
      <img
        key={`image-${i}`}
        src={image.src}
        alt={image.description || `Image number ${i} in a slideshow`}
      />
    )
  })

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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      description: PropTypes.string
    })
  ),
}

export default Slideshow
