import React from 'react'
import qm2 from "./pics/qm2.png";
import Scores from './Scores';
import Table from './Components/Table';


function Work() {
  return (
      <div className="App my-3">

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
</div>
  )
}

export default Work