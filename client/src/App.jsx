import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'
import User from "./components/getuser/user"
import Add from "./components/adduser/Add"
import EditUser from "./components/updateuser/EditUser"

function App() {

  const route = createBrowserRouter([

    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: <Add />
    },
    {
      path: '/edit/:id',
      element: <EditUser />
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
