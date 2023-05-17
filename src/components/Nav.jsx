// rrd imports
import { Form, NavLink } from 'react-router-dom'

// assets
import logomark from '../assets/logomark.svg'

export const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home"><img src={logomark} alt="" height={30}/>
      <span>Home Budget</span>
      </NavLink>
      {
        userName && (
          <Form method="post" action="/logout">
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>

            </button>
          </Form>
        )
      }
      
    </nav>
  )
}

