import { useEffect, useState } from 'react'

const FilterForecast = () => {

  const [filter, setFilter] = useState('Hourly');
  const toggleFilter = (forecast) => {
    if (forecast != filter){
      setFilter(forecast)
    }
  };
  
  return {filter, toggleFilter};
}

export default FilterForecast;