import { useState } from 'react'
import './App.css'
import Table from "./Components/Table"
import Scores from "./Components/Scores"
import Header from "./Components/Header"
import Start from './Components/Start'
import Work from './Components/Work'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Start/> */}
    {/* <Work/> */}
    {/* <Scores/> */}
    {/* <Table/> */}
    {/* <div className="App my-3">

<Scores />
<div id="mainid" className="my-3">
  <div>
    <h2 id="c" className="my-3">
      Choose One
    </h2>
    <Table/>
  </div>

  <div style={{ backgroundColor: "white" }}>
    <img src={qm2} alt="None" height="100px" className="my-3" />
    <div id="num">
      <div>
        <h3 className="my-3">Player</h3>
        <h3 className="my-3">Computer</h3>
      </div>
      <div>
        <h3 className="my-3 mx-3">{0}</h3>
        <h3 className="my-3 mx-3">{1}</h3>
      </div>
    </div>
  </div>
</div>
</div> */}
    </>
  )
}

export default App
