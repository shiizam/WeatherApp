import { useContext } from 'react'
import { Context } from '../../App'
import { SearchBar } from '../SearchBar/SearchBar'
import hamburger from '../../assets/images/hamburger-icon.svg'
import cloud from '../../assets/images/cloud-sun-solid.svg'
import './nav.css'


export const Nav = () => {
  const { isOpen, setIsOpen } = useContext(Context);

  const toggleMobileNavMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className='nav-wrapper'>
      <div className="company-header">
        <h1 id='company-name'>Only Real Weather Co.</h1>
        <h2 id='company-slogan'>Fake company, real weather</h2>
      </div>
      
      <img id='logo' src={cloud} alt="Logo" />
    </div>
  )
}
