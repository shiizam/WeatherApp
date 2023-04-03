import { useContext } from 'react'
import { Context } from '../../App'
import { useForm } from 'react-hook-form';
import './search-bar.css'

export const SearchBar = () => {
  const { getCity, toggleUnits, isFahrenheit, style } = useContext(Context);

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      city: ''
    }
  });

  const onSubmit = (data) => {
    const { city } = data;
    getCity(city)
    if (city) {
      reset();
    }
  }

  return (
    <div className="form-wrapper">
      <div className="units-container">
        <button className='units' id='f-units' value='F' style={isFahrenheit ? style.clickedBtnStyle : null} onClick={(e) => toggleUnits(e.target.value)}>F</button>
        <button className='units' id='c-units' value='C' style={isFahrenheit ? null : style.clickedBtnStyle} onClick={(e) => toggleUnits(e.target.value)}>C</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          id='search-city'
          type='text'
          placeholder='Enter a city...'
          {...register("city", {
            required: {
              value: true,
              message: "Enter a city"
              },
            })
          }
          aria-invalid={errors.city ? true : false}
        />
        <button type='submit' className='search-btn'>
          Go
        </button>
      </form>
    </div>
  )
}
