import React from 'react';
import qm from './pics/qm.png'
import dices from './pics/dices.png'
import "../Colors/Start.css"
function Start() {
  return (
    <div id="star">
      <div id="s1">
        <img id="dices" src={qm} alt="None" height="150px"/>
        <img id="qq" src={dices} alt="None" height="300px"/>
      </div>
    </div>
  )
}

export default Start
