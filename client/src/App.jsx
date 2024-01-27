import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'
import User from "./components/getuser/user"

function App() {

  const route = createBrowserRouter([

    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: "useradd"
    },
    {
      path: '/update',
      element: "/update"
    },

  ])


  return (
    <div>

    <RouterProvider router={route}>


    </RouterProvider>

    </div>
  )
}

export default App
