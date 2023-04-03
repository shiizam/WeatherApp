import { useEffect, useState } from 'react'

const MeasurementUnits = () => {

  const [units, setUnits] = useState('F');
  const toggleUnits = (unit) => {
    if (unit != units){
      setUnits(unit)
      window.localStorage.setItem('units', unit)
    }
  };

  useEffect(() => {
    const localUnits = window.localStorage.getItem('units')
    localUnits && setUnits(localUnits);
  }, [units]);
  
  return {units, toggleUnits};
}

export default MeasurementUnits;