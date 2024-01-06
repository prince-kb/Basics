import React from 'react'
import qm2 from "./pics/qm2.png";
import Scores from './Scores';
import Table from './Table';
import "../Colors/App.css"

function Work() {
  return (
      <div className="App my-3" id="gg">

<Scores />
<div id="mainid" className="mx-3 my-3">
  <div>
    <h2 id="c" className="my-3" style={{}}>
      Choose One
    </h2>
    <Table/>
  </div>

  <div id="wrapper1" style={{ backgroundColor: "white", display : "flex" }}>
    <div className='mx-3'> <img src={qm2} alt="None" height="100px" className="my-3" /></div>
    <div id="num">
      <div>
        <h3 className="my-4">Player</h3>
        <h3 className="my-4">Computer</h3>
      </div>
      <div>
        <h3 className="my-4 mx-3">{0}</h3>
        <h3 className="my-4 mx-3">{1}</h3>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Work
