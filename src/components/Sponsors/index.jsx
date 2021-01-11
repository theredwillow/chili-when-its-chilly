import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import './index.css'

import Carousel from 'nuka-carousel'

const Sponsors = ({images}) => {
  if (!images || !images.length) {
    return (<></>)
  }

  images = images.map((image, i) => image.url
    ? (
        <a
          href={image.url}
          target="_blank"
          rel="noreferrer"
          key={`sponsors-${i}`}
        >
          <Img
            fluid={image.src.childImageSharp.fluid}
            alt={image.description || `Sponsor number ${i}`}
          />
        </a>
      )
    : (
        <Img
          key={`sponsors-${i}`}
          fluid={image.src.childImageSharp.fluid}
          alt={image.description || `Sponsor number ${i}`}
        />
      )
  )

  if (images.length === 1) {
    return images[0]
  }

  return (
    <div className="sponsors">
      <h1>Sponsors</h1>
      <br />
      <Carousel autoplay={true}>
        {images}
      </Carousel>
      <br />
    </div>
  )
}

Sponsors.propTypes = {
  images: PropTypes.array
}

export default Sponsors
