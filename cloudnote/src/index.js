import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import AllNotes from './Components/AllNotes';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "mynotes",
        element : <AllNotes/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

