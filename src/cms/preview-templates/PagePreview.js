import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/pages'

const PagePreview = ({ entry }) => {
  const data = entry.get('data').toJS()

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      <PageTemplate
        slideshowImages={data.slideshowImages}
        sections={data.sections}
        sponsorImages={data.sponsorImages}
      />
    </>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  })
}

export default PagePreview
