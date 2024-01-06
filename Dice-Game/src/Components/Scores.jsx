import React, { useState } from 'react'
import '../Colors/Scores.css';
function Scores() {
  const [score1,setScore1]=useState(0);
  const [score2,setScore2]=useState(0);
  return (
<>
<div id="p" className=''>
    <div class="p1" >
    <h2 id="c1" className="my-3">Player 1</h2>
    <h2 id="c2">{score1}</h2>
    </div>
    <div class="p1" >
    <h2 id="c1" className="my-3">Computer</h2>
    <h2 id="c2">{score2}</h2>
    </div>

</div>
</>
  )
}

export default Scores
