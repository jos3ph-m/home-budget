import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Library
import { ToastContainer } from 'react-toastify'

// layouts
import Main, {mainLoader} from './layouts/main';

// Actions
import { logoutAction } from './actions/logout';

// Routes
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error/>
      },
      {
        path: "about",
        element: <p>about</p>
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
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
