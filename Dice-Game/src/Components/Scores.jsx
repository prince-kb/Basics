import React from 'react'
import '../Colors/Scores.css';
function Scores() {

  return (
<>
<div id="p" className=''>
    <div class="p1" >
    <h2 id="c1" className="my-3">Player 1</h2>
    <h2 id="c2">{0}</h2>
    </div>
    <div class="p1" >
    <h2 id="c1" className="my-3">Computer</h2>
    <h2 id="c2">{1}</h2>
    </div>

</div>
</>
  )
}

export default Scores
