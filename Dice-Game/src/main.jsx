import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Work from './Components/Work.jsx'
import Start from './Components/Start.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Start/>,
//     children : [
//       {
//         path : "work",
//         element : <Work/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
