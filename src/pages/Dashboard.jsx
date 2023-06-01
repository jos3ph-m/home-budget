// react router dom imports
import { useLoaderData } from 'react-router-dom';

// helper functions
import { fetchData } from '../helpers'

// components
import Intro from '../components/Intro';

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// action
export async function dashboardAction() {}

const Dashboard = () => {
  const {userName} = useLoaderData()

  return (
    <>{userName ? (<p>{userName}</p>) : <Intro />}Dashboard</>
  )
}

export default Dashboard