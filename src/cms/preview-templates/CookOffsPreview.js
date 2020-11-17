import React from 'react'
import PropTypes from 'prop-types'
import { CookOffsTemplate } from '../../templates/cook-offs'

const CookOffsPreview = ({ entry }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
    <CookOffsTemplate
      competitions={entry.getIn(['data', 'competitions'])}
      rules={entry.getIn(['data', 'rules'])}
    />
  </>
)

CookOffsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default CookOffsPreview
