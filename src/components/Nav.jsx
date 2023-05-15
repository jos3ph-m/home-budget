// rrd imports
import { NavLink } from 'react-router-dom'

// assets
import logomark from '../assets/logomark.svg'

export const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home"><img src={logomark} alt="" height={30}/>
      <span></span>
      </NavLink>
      
    </nav>
  )
}

