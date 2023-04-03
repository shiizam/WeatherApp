import { useContext } from 'react';
import { Context } from '../../App';
import './hourly-list.css';

export const HourlyList = () => {
  const { weather, isFahrenheit, units } = useContext(Context);

  const parseHour = (hour) => {
    let hours = hour.time.split(" ")[1].split(":")[0]
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    const convertHours = `${hours} ${AmOrPm}`
    return convertHours
  }

  return (
    <>
    {weather ? (
      <div className='hourly-wrapper'>
      {weather.forecast.forecastday[0].hour.map((hour, index) => (
        <div key={index} className='card'>
          <h1 className='card-date'>{parseHour(hour)}</h1>
          <img src={hour.condition.icon} alt={`${index}-icon`} />
          <div className="hourly-card-footer">
            <p className='hour-temp'>{parseInt(isFahrenheit ? hour.temp_f : hour.temp_c)}°{units}</p>
          </div>
        </div>
      ))}
      </div>
    ) : <></>
    }
    </>
  )
}
