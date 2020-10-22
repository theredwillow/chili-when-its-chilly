import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import PagePreview from './preview-templates/PagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: "html",
//   // Visible label
//   label: "HTML",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       name: 'code',
//       label: 'HTML',
//       widget: 'text',
//       default: `<iframe src="https://open.spotify.com/embed/track/3rh7nzCYQewysfgjFMkHHe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
//       hint: `This allows you to add your own HTML to your pages. BE VERY CAREFUL WITH THIS! Hackers can share fake embed codes to steal information from you. Only accept code from trusted sources. Spotify is one example. To add a song, artist, album, or playlist: find it on Spotify, click the menu/ellipsis, "Share", then "Copy Embed Code", finally paste that here.`
//     }
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^html (\S+)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: (match) => ({ code: match[1] }),
//   // Function to create a text block from an instance of this component
//   toBlock: (obj) => 'html ' + obj.code,
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: (obj) => (<div dangerouslySetInnerHTML={{ __html: obj.code }} />)
// });
CMS.registerPreviewTemplate('index', PagePreview)
CMS.registerPreviewTemplate('page', PagePreview)
