import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


// Routes
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/error';
import Main from './layouts/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>
  },
  {
    path: '/',
    element: <Dashboard/>,
    loader: dashboardLoader,
    errorElement: <Error/>
  },
])

function App() {
  return (
    <>
      <div className="App"><RouterProvider router={router}/></div>
    </>
  )
}

export default App
