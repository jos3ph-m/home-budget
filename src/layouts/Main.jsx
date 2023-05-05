// react router dom imports
import { Outlet, useLoaderData } from 'react-router-dom';

// helper functions
import { fetchData } from '../helpers'

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const {userName} = useLoaderData()

  return (
    <div><h1>The username is {userName}</h1><Outlet /></div>
  )
}

export default Main