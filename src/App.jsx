import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    
  },
])

function App() {
  return (
    <>
      <div className="App"></div>
    </>
  )
}

export default App
