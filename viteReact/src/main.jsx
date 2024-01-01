import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'
import User from './User.jsx'
import Github from './Github.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'github',
        element : <Github/>
      },
      {
        path : 'about/:useridd',
        element : <User/>
      },
    ]
  },
])

//Not working
/* const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
    </Route>
  )
) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
