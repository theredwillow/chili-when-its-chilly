import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import PagePreview from './preview-templates/PagePreview'
import CookOffsPreview from './preview-templates/CookOffsPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', PagePreview)
CMS.registerPreviewTemplate('cook-offs', CookOffsPreview)
CMS.registerPreviewTemplate('page', PagePreview)
