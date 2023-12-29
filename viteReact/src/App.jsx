import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Home/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;