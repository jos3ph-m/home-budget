import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log("Error reported: ", error)

  return (
    <div>error</div>
  )
}

export default Error