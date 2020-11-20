import React from 'react'
import PropTypes from 'prop-types'
import { CookOffsTemplate } from '../../templates/cook-offs'

const CookOffsPreview = ({ entry }) => {
  const data = entry.get('data').toJS()

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      <CookOffsTemplate
        competitions={data.competitions}
        rules={data.rules}
      />
    </>
)}

CookOffsPreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  })
}

export default CookOffsPreview
