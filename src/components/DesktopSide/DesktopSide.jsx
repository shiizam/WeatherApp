import { Nav,
  SideCard,
  SearchBar,
  Forecast,
} from '../components'
import './desktop-side.css'

export const DesktopSide = () => {
  return (
    <div className='desktop-sidecard'>
      <Nav />
      <SearchBar />
      <SideCard />
      <Forecast />
    </div>
  )
}
