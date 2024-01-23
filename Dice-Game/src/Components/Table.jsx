import React from 'react'
import TableContext from './context/TableContext'
import l1 from "./pics/1.png"
import l2 from "./pics/2.png"
import l3 from "./pics/3.png"
import l4 from "./pics/4.png"
import l5 from "./pics/5.png"
import l6 from "./pics/6.png"


export default function Table(props) {

  const selected = (p)=>{
    return p.target;    
  }

  return (
    <TableContext.Provider value = {selected}>
    <div>
      <table id="dices" className="" style ={{backgroundColor: "yellow"}}>
  <tr>
    <td><img src={l1} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll1" onClick={selected}/></td>
    <td><img src={l2} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll2" onClick={selected}/></td>
    <td><img src={l3} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll3" onClick={selected}/></td>
  </tr>
  <tr>
    <td><img src={l4} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll4" onClick={selected}/></td>
    <td><img src={l5} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll5" onClick={selected}/></td>
    <td><img src={l6} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll6" onClick={selected}/></td>
  </tr>
</table>
    </div>
    </TableContext.Provider>
  )
}
