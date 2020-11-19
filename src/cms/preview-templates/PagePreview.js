import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/pages'

const PagePreview = ({ entry }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
    <PageTemplate
      slideshowImages={entry.getIn(['data', 'slideshowImages'])}
      sections={entry.getIn(['data', 'sections'])}
    />
  </>
)

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default PagePreview
