import React, { useState } from 'react';
import qm from './pics/qm.png'
import dices from './pics/dices.png'
import "../Colors/Start.css"
import { Link } from 'react-router-dom';
function Start() {
  const st=()=>{
    if(dis == "none")
      setDis("grid");
    else setDis("none");
  }
  const [dis,setDis] = useState("none");
  return (
    <div id="star">
      <div id="s1">
        <img id="dices" src={dices} alt="None" height="300px"/>
        <img id="qq" src={qm} alt="None" height="120px"/>
      </div>
      <div id="go">
        <div id="s" onClick={st}><h2 id="starrt">Start</h2></div>
        <div id="ggg" style={{display: dis }}>
          <h4 id="oneplayer"><Link to="/work" style={{color : "black"}}>One Player</Link></h4>
          <h4 id="twoplayer">Two Player</h4>
        </div>
      </div>
    </div>
  )
}

export default Start
