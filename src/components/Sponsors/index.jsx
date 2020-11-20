import React from 'react'
// import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import './index.css'

import Carousel from 'nuka-carousel'

const Sponsors = ({images}) => {
  if (!images || !images.length) {
    return (<></>)
  }

  images = images.map((image, i) => (
    <img
      key={`sponsors-${i}`}
      src="https://placekitten.com/g/400/200"
      alt="Place holder kitten"
    />
    // <Img
    //   key={`image-${i}`}
    //   fluid={image.src.childImageSharp.fluid}
    //   alt={image.description || `Image number ${i} in a slideshow`}
    // />
  ))

  if (images.length === 1) {
    return images[0]
  }

  return (
    <div className="sponsors">
      <Carousel autoplay={true}>
        {images}
      </Carousel>
    </div>
  )
}

Sponsors.propTypes = {
  images: PropTypes.array
}

export default Sponsors
