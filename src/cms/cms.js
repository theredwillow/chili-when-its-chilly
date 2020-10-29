import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import React from 'react'

import PagePreview from './preview-templates/PagePreview'
import Slideshow from '../components/Slideshow'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerEditorComponent({
  // Internal id of the component
  id: "slideshow",
  // Visible label
  label: "Slideshow",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'images',
      label: 'Images',
      widget: 'list',
      field: {label: 'Image', name: 'image', widget: 'image'}
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^slideshow ?(\S*)$/,
  // Function to extract data elements from the regexp match
  fromBlock: (match) => {
    const textProvided = match[1]
    let images = []
    if (textProvided !== "undefined") {
      images = textProvided.split(',').filter(val => val)
    }
    return { images }
  },
  // Function to create a text block from an instance of this component
  toBlock: (obj) => {
    return 'slideshow ' + obj.images
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: (obj) => (<Slideshow images={obj.images} />)
});
CMS.registerPreviewTemplate('index', PagePreview)
CMS.registerPreviewTemplate('page', PagePreview)
