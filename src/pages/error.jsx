import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  
  return (
    <div className="error">
      <h1>Uh oh!  It looks like there is an issue.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button></button>
        <Link></Link>
      </div>
    </div>
  )
}

export default Error