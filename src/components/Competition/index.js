import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import WinnerBrowser from './WinnerBrowser'
import './index.css'

const Competition = ({title, image, prevYears}) => {
  const [isOpen, setOpen] = useState(false)

  if (!image) {
    return (
      <div>
        Sorry, there was an error while displaying this competition's image.
      </div>
    )
  }

  return (
    <div id={title.replace(/ /g, '')} className={`competition`}>
      <PreviewCompatibleImage
        image={image}
        alt={title}
      />
      {
        Boolean(!isOpen && prevYears.length) &&
          <div
            onClick={() => setOpen(true)}
            onKeyDown={() => setOpen(true)}
            role="button"
            tabIndex={0}
            className='see-prev toggle-winners'
          >
            See Previous Winners
          </div>
      }
      {
        isOpen &&
          <div>
            <div
              onClick={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
              role="button"
              tabIndex={0}
              className='toggle-winners'
            >
              (Close Previous Winners Display)
            </div>
            <WinnerBrowser
              contestName={title}
              prevYears={prevYears.reduce((o, key) => ({ ...o, [key.year]: key}), {})}
            />
          </div>
      }
    </div>
  )
}

Competition.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any,
  prevYears: PropTypes.array
}

export default Competition
