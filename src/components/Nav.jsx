// assets
import logomark from '../assets/logomark.svg'

const Nav = ({ userName }) => {
  return (
    <nav>
      <img src={logomark} alt="" height={30}/>
    </nav>
  )
}

export default Nav