import { useContext } from 'react'
import { Context } from '../../App'

import { Card } from '../Card/Card'
import './card-list.css'
import { HourlyList } from './HourlyList'

export const CardList = () => {
  const { weather, isDaily } = useContext(Context);

  return (
    <>
    { weather ? (
      <div className='list-wrapper'>
      {isDaily ? (
        <div>
          <h1 className='forecast-title-wrapper'>10 Day Forecast</h1>
          <Card />
        </div>
        ) : (
        <div>
          <h1 className='forecast-title-wrapper'>Hourly Forecast</h1>
          <HourlyList />
        </div>
        )
      }
      </div>
      ) : <></>
    }
    </>
  )
}
