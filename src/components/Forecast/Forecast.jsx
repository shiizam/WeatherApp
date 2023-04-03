import { useContext } from 'react'
import { Context } from '../../App'
import { Button } from '../components'
import './forecast.css'


export const Forecast = () => {
  const { isDaily, style, toggleFilter } = useContext(Context);

  return (
    <div className='forecast-btn-wrapper'>
      <Button id='hourly' hourlyValue='Hourly' tenDayValue='10-Day' styleHourly={isDaily ? null : style.clickedBtnStyle} styleTenDay={isDaily ? style.clickedBtnStyle : null} toggleFilter={toggleFilter} />
    </div>
  )
}
