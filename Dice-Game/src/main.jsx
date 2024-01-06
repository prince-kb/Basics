import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Work from './Components/Work.jsx'
import Start from './Components/Start.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './Components/Error.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Start/>,
      },
      {
        path : 'work',
        element : <Work/>
      }
    ]
  },
  {
    path : '*',
    element : <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
