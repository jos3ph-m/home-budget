import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hi</h1>
  },
  {
    path: '/about',
    element: <h1>About</h1>
  },
  {
    path: '/audrey',
    element: <h1>Audrey</h1>
  },
  {
    path: '/joey',
    element: <h1>Joey</h1>
  }
])

function App() {
  return (
    <>
      <div className="App"><RouterProvider router={router}/></div>
    </>
  )
}

export default App
