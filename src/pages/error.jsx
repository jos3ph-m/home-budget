import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  
  return (
    <div className="error">error</div>
  )
}

export default Error