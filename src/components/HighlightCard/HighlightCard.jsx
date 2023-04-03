import { useContext } from 'react'
import { Context } from '../../App'
import './highlight-card.css'

export const HighlightCard = () => {
  const { weather, isFahrenheit } = useContext(Context);

  return (
    <>
    {weather ? (
    <div className="wind-list-wrapper">
      <h1 className='wrapper-subtitles'>Today's Highlights</h1>
      <div className='highlight-card' id='wind-status'>
        <p className="highlight-card-title">Wind Status</p>
        <h2 className='highlight-main-data'>{isFahrenheit ? parseInt(weather.current.wind_mph) + ' mph': `${weather.current.wind_kph} kph`}</h2>
        <p id='direction'>{weather.current.wind_dir}</p>
      </div>

      <div className='highlight-card' id='humidity'>
        <p className="highlight-card-title">Humidity</p>
        <h2 className='highlight-main-data'>{weather.current.humidity}%</h2>
        
        <div className="progress-label">
          <p>0%</p>
          <p id='progress-label-end'>100%</p>
        </div>
        <div className="progress-container">
          <div id='progress-bar'
            style={
              {height: '10px',
              width:(`${weather.current.humidity}` * 2.5),
              backgroundColor: 'hsl(53, 100%, 70%)',
              borderRadius: '1.4rem'}
              }
          ></div>
        </div>
      </div>
    
      <div className='highlight-card' id='visibility'>
        <p className="highlight-card-title">Visibility</p>
        <h2>{ isFahrenheit ? parseInt(weather.current.vis_miles) + ' Miles' : parseInt(weather.current.vis_km) + ' km'}</h2>
      </div>

      <div className='highlight-card' id='air-pressure'>
        <p className="highlight-card-title">Air Pressure</p>
        <h2 className='highlight-main-data'>{isFahrenheit ? `${weather.current.pressure_in} in` : `${weather.current.pressure_mb} mb`}</h2>
      </div>
    </div>
    ) : <></>
  }
  </>
  )
}
