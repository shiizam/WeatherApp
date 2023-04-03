import React, { useState, createContext} from 'react'
import axios from 'axios';
import 
{ Nav,
  SideCard,
  SearchBar,
  CardList,
  HighlightCard,
  Forecast,
} from './components/components'
import MeasurementUnits from './Hooks/MeasurementUnits';
import FilterForecast from './Hooks/FilterForecast';
import {style} from './constants';
import './index.css'

export const Context = createContext();

function App() {
  const { units: currentUnits, toggleUnits, units} = MeasurementUnits();
  const isFahrenheit = currentUnits === 'F'
  const { toggleFilter, filter } = FilterForecast();
  const isDaily = filter === '10-Day';
  const [weather, setWeather] = useState(null);
  const [isOpen, setIsOpen] = useState(false)
  console.log(filter)

  const getCity = (city) => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/api",
      params: {q: city}
    }
    
    axios.request(options)
      .then((response) => {
      setWeather(response.data)
  
      }).catch((error) => {
        console.error(error)
      })
  }

  return (
    <main className="App">
      <Context.Provider value={{getCity, weather, isOpen, setIsOpen, toggleUnits, isFahrenheit, units, isDaily, style, toggleFilter }}>
        <Nav />
        <SearchBar />
        <SideCard />
        <Forecast />
        <CardList />
        <HighlightCard />
      </Context.Provider>
    </main>
  )
}

export default App
