import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import WinnerBrowser from './WinnerBrowser'
import './index.css'

const Competition = ({info}) => {
  const [isOpen, setOpen] = useState(false)

  let prevYears = []
  if (info && info.years && info.years.length) {
    prevYears = info.years.filter(y => y.winners)
  }

  if (!info || !info.image) {
    return (
      <div>
        Sorry, there was an error while displaying this competition's image.
      </div>
    )
  }

  return (
    <div className={`competition`}>
      <Img
        fixed={info.image.childImageSharp.fixed}
        alt={info.title}
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
              contestName={info.title}
              prevYears={prevYears.reduce((o, key) => ({ ...o, [key.year]: key}), {})}
            />
          </div>
      }
    </div>
  )
}

Competition.propTypes = {
  info: PropTypes.object.isRequired
}

export default Competition
