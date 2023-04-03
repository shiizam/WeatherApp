import './button.css'

export const Button = ({ toggleFilter, tenDayValue, styleTenDay, hourlyValue, styleHourly }) => {
  return (
    <>
      <button className='toggleBtn' id='hours' style={styleHourly} value={hourlyValue} onClick={(e) => toggleFilter(e.target.value)}>{`${hourlyValue}`}</button>
      <button className='toggleBtn' id='ten-days' style={styleTenDay} value={tenDayValue} onClick={(e) => toggleFilter(e.target.value)}>{`${tenDayValue}`}</button>
    </>
  )
}

