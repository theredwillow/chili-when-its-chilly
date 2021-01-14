import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ alt = '', image, ...attrs }) => {
  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} {...attrs} />
    )
  }

  return <img src={image.publicURL} alt={alt} {...attrs} />
}

PreviewCompatibleImage.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}

export default PreviewCompatibleImage
