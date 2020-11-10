import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Trophy from './Trophy'
import './index.css'

// FIXME
import homebrew from '../../img/competition/homebrew.jpg'
import twentynineteenhomebrewfirstmurrah from '../../img/competition/2019-homebrew-1st-murrah.jpg'
import twentynineteenhomebrewsecondshannon from '../../img/competition/2019-homebrew-2nd-shannon.jpg'
import twentynineteenhomebrewthirdmurrah from '../../img/competition/2019-homebrew-3rd-murrah.jpg'

const WinnerBrowser = ({contestName}) => {
  const [winnerOpen, setWinnerOpen] = useState({})
  const [placeOpen, setPlaceOpen] = useState('first')
  const [yearOpen, setYearOpen] = useState(0)
  const [sponsorOpen, setSponsorOpen] = useState({})

  // FIXME Get info from data
  const prevYears = {
    2019: {
      winners: {
        first: {
          name: 'Murrah',
          image: twentynineteenhomebrewfirstmurrah
        },
        second: {
          name: 'Shannon Kornegay',
          image: twentynineteenhomebrewsecondshannon
        },
        third: {
          name: 'Murrah',
          image: twentynineteenhomebrewthirdmurrah
        }
      },
      sponsor: {
        name: 'Brenham Homebrewer Supply',
        link: 'https://www.example.com/'
      }
    },
    2017: {
      winners: {
        first: {
          name: 'Murrah',
          image: twentynineteenhomebrewfirstmurrah
        },
        second: {
          name: 'Shannon Kornegay',
          image: twentynineteenhomebrewsecondshannon
        },
        third: {
          name: 'Murrah',
          image: twentynineteenhomebrewthirdmurrah
        }
      },
      sponsor: {
        name: 'Brenham Homebrewer',
        link: 'https://www.example.com/'
      }
    }
  }

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

  const latestYear = Math.max(...allYears)
  if (!yearOpen) {
    setWinnerOpen(prevYears[latestYear].winners.first)
    setYearOpen(latestYear)
    setSponsorOpen(prevYears[latestYear].sponsor)
  }

  const changeYearOpen = (year) => {
    setWinnerOpen(prevYears[year].winners[placeOpen])
    setYearOpen(year)
    setSponsorOpen(prevYears[year].sponsor)
  }
  const changePlaceOpen = (place) => {
    setWinnerOpen(prevYears[yearOpen].winners[place])
    setPlaceOpen(place)
  }

  return (
    <div className='winner-browser'>
      <img
        className='winner-picture'
        src={winnerOpen.image}
        alt={`${winnerOpen.name} holding their ${placeOpen} place trophy for winning the ${contestName}, sponsored by ${sponsorOpen.name}`}
      />
      <div className='trophies'>
        { ['first', 'second', 'third'].map(place => (
          <Trophy
            className={`${place} trophy ${placeOpen === place ? 'open': ''}`}
            title={`${place.charAt(0).toUpperCase() + place.slice(1)} Place`}
            key={`${place} place`}
            onClick={() => changePlaceOpen(place)}
          />
        )) }
      </div>
      { allYears.length > 1 &&
      <div className='years'>
        { allYears.map(year => (
          <span
            key={`${year} year`}
            className={`year ${year === yearOpen ? 'open' : ''}`}
            onClick={() => changeYearOpen(year)}
          >
            {year}
          </span>
        )) }
      </div>
      }
      <div className='winner-info'>
        {winnerOpen.name} was the {placeOpen} place winner of the {contestName} of {yearOpen},
        sponsored by <a href={sponsorOpen.link} target="_blank" rel="noreferrer">{sponsorOpen.name}</a>
      </div>
    </div>
  )
}

const Competition = ({name: contestName}) => {
  const [isOpen, setOpen] = useState(false)

  // FIXME Get image from data
  const contestImage = homebrew

  return (
    <div className={`competition`}>
      <img src={contestImage} alt={contestName} />
      {
        !isOpen &&
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
            <WinnerBrowser contestName={contestName} />
          </div>
      }
    </div>
  )
}

Competition.propTypes = {
  name: PropTypes.string
}

export default Competition
