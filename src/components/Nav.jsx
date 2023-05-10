// rrd imports
import { NavLink } from 'react-router-dom'

// assets
import logomark from '../assets/logomark.svg'

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink><img src={logomark} alt="" height={30}/>
      <span>HomeBudget</span>
      </NavLink>
      
    </nav>
  )
}

export default Nav