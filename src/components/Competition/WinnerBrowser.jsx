import React, { useState } from 'react'
import Img from 'gatsby-image'
import Trophy from './Trophy'

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
    const winnerOpen = getWinnerOpen()
    if (!winnerOpen) { return "&nbsp;" }

    const winnersName = winnerOpen.winnersName
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

  const getWinnersPicture = () => {
    const openWinner = getWinnerOpen()

    if (!openWinner) {
      return (
        <div className="winner-picture">
          Oops! Looks like we don't have any information about the {placeOpen.replace('Place', ' place')} winner of the {contestName} from {yearOpen}.
        </div>
      )
    }

    if (!openWinner.winnersPicture) {
      return (
        <div className="winner-picture">
          Oops! Looks like we don't have any pictures of the {placeOpen.replace('Place', ' place')} winner of the {contestName} from {yearOpen}.
        </div>
      )
    }

    return (
      <Img
        className='winner-picture'
        fixed={openWinner.winnersPicture.childImageSharp.fixed}
        alt={getWinnersCopy(true)}
      />
    )
  }

  // FIXME https://www.gatsbyjs.com/docs/working-with-images-in-markdown/
  return (
    <div className='winner-browser'>
      { getWinnersPicture() }

      <div className='trophies'>
        { ['first', 'second', 'third'].map(place => (
          <Trophy
            className={`${place} trophy ${placeOpen === `${place}Place` ? 'open': ''}`}
            title={`${place.charAt(0).toUpperCase() + place.slice(1)} Place`}
            key={`${place} place`}
            onClick={() => setPlaceOpen(`${place}Place`)}
            onKeyDown={() => setPlaceOpen(`${place}Place`)}
            role="button"
            tabIndex={0}
          />
        )) }
      </div>

      { allYears.length > 1 &&
      <div className='years'>
        { allYears.map(year => (
          <span
            key={`${year} year`}
            className={`year ${year === yearOpen ? 'open' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => setYearOpen(year)}
            onKeyDown={() => setYearOpen(year)}
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

export default WinnerBrowser
