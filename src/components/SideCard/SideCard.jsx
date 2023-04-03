import { useContext } from 'react'
import { Context } from '../../App'
import './side-card.css'

export const SideCard = () => {
  const { weather, isFahrenheit, units } = useContext(Context);
  
  return (
    <div className='side-card-wrapper'>      
      {weather ? (
        <div className='side-card-container'>
          <p className='side-card-title'>Today</p>
          <p className='current-city'>{weather.location.name}</p>
          <img className='currentWeather-icon' src={weather.current.condition.icon} alt="current-weather-icon" />
          <h1 className='current-temp'><span>{parseInt(isFahrenheit ? weather.current.temp_f : weather.current.temp_c)}</span>°{units}</h1>
          <h2>{weather.current.condition.text}</h2>
        </div>
        ) : <></> 
      }
    </div>
  )
}
