import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Trophy from './Trophy'
import './index.css'

const WinnerBrowser = ({contestName, prevYears}) => {
  const [placeOpen, setPlaceOpen] = useState('firstPlace')
  const [yearOpen, setYearOpen] = useState(0)

  if (!prevYears) {
    return (
      <div>
        Sorry. An error seems to have occurred while retrieving information about this contest's previous winners.
      </div>
    )
  }

  const allYears = Object.keys(prevYears).sort()

  if (allYears.length < 1) {
    return (
      <div>
        Sorry. There doesn't seem to be any information about this contest's previous winners.
      </div>
    )
  }

  const getWinnerOpen = () => prevYears[yearOpen].winners[placeOpen]
  const getSponsorOpen = () => prevYears[yearOpen].sponsor
  const getWinnersCopy = (isAlt) => {
    const winnersName = getWinnerOpen().winnersName
    const sponsorOpen = getSponsorOpen()
    let winnersCopy = (winnersName)
      ? `${winnersName}, holding their ${placeOpen.replace('Place', ' place')} trophy`
      : `The ${placeOpen.replace('Place', ' place')} winner of the ${contestName}, holding their trophy`
    winnersCopy += ` for winning the ${contestName}`
    if (sponsorOpen && sponsorOpen.name) {
      winnersCopy += (isAlt && sponsorOpen.sponsorUrl)
        ? `, which was sponsored by ${sponsorOpen.name}`
        : `, which was sponsored by <a href="${sponsorOpen.sponsorUrl}" target="_blank" rel="noreferrer">${sponsorOpen.name}</a>`
    }
    winnersCopy += ` in ${yearOpen}`
    return winnersCopy
  }

  if (!yearOpen) {
    const latestYear = String(Math.max(...allYears))
    setYearOpen(latestYear)
    return <></>
  }

  // FIXME https://www.gatsbyjs.com/docs/working-with-images-in-markdown/
  return (
    <div className='winner-browser'>
      <Img
        className='winner-picture'
        fixed={getWinnerOpen().winnersPicture.childImageSharp.fixed}
        alt={getWinnersCopy(true)}
      />
      <div className='trophies'>
        { ['first', 'second', 'third'].map(place => (
          <Trophy
            className={`${place} trophy ${placeOpen === `${place}Place` ? 'open': ''}`}
            title={`${place.charAt(0).toUpperCase() + place.slice(1)} Place`}
            key={`${place} place`}
            onClick={() => setPlaceOpen(`${place}Place`)}
          />
        )) }
      </div>
      { allYears.length > 1 &&
      <div className='years'>
        { allYears.map(year => (
          <span
            key={`${year} year`}
            className={`year ${year === yearOpen ? 'open' : ''}`}
            onClick={() => setYearOpen(year)}
          >
            {year}
          </span>
        )) }
      </div>
      }
      <div className='winner-info' dangerouslySetInnerHTML={{ __html: getWinnersCopy() }} />
    </div>
  )
}

const Competition = ({info}) => {
  const [isOpen, setOpen] = useState(false)

  const prevYears = info.years.filter(y => y.winners)

  // FIXME 0 appearing near hot dog
  return (
    <div className={`competition`}>
      <Img
        fixed={info.image.childImageSharp.fixed}
        alt={info.contestName}
      />
      {
        (!isOpen && prevYears && prevYears.length) &&
          <div
            onClick={() => setOpen(true)}
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
              className='toggle-winners'
            >
              (Close Previous Winners Display)
            </div>
            <WinnerBrowser
              contestName={info.contestName}
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
