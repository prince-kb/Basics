import React from 'react'

function Selected(props) {
    const s = (e)=>{
        e.target.style.backgroundColor="red";
    }
  return (
    <div>
        <td><img src={props.src} alt = "None" height="80px" className="mx-2 my-2 bg-light"  id="ll1" onClick={s}/></td>
    </div>
  )
}

export default Selected
