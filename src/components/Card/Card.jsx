import { useContext } from 'react';
import { Context } from '../../App';
import './card.css';


export const Card = () => {
  const { weather, isFahrenheit, units } = useContext(Context);

  const dateFormat = (date) => {
    // Grab the first 3 entries of date object to get day, month, & year
    let formattedDate = new Date(date).toString().split(" ", 3).join(" ");
    return formattedDate
  }

  return (
    <>
    {weather ? (
      <div className="card-wrapper">
        {weather.forecast.forecastday.map((date, index) => (
        <div key={index} className='card'>
          <h1 className='card-date'>{dateFormat(date.date)}</h1>
          <img src={date.day.condition.icon} alt={`${index}-icon`} />
          <div className="card-footer">
            <div className='daily-high-temp'>
              <p >{parseInt(isFahrenheit ? date.day.maxtemp_f : date.day.maxtemp_c)}°{units}</p>
              <p id='daily-high-label'>High</p>
            </div>
            
            <div className='daily-low-temp'>
              <p >{parseInt(isFahrenheit ? date.day.mintemp_f : date.day.mintemp_c)}°{units}</p>
              <p id='daily-low-label'>Low</p>
            </div>
          </div>
        </div>
      ))}
      </div>
      ) : <></>
    }
  </>  
  )
}
