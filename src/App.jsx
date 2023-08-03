import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Library
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// layouts
import Main, {mainLoader} from './layouts/main';

// Actions
import { logoutAction } from './actions/logout';

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
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
        action: dashboardAction,
        errorElement: <Error/>
      },
      {
        path: "about",
        element: <p>about</p>
      },
      {
        path: "",
        action: logoutAction
      }
    ]
  },
])

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}/>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
