import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'

const PagePreview = ({ entry, widgetFor }) => (
  <PageTemplate
    slideshowImages={entry.getIn(['data', 'slideshowImages'])}
    sections={entry.getIn(['data', 'sections'])}
  />
)

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview
