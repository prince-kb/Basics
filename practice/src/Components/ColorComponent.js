import React from 'react'

export default function ColorComponent(props) {
  return (
    <div style={{height : '2vw',width: '2vw',backgroundColor : `${props.color}`,display : 'inline-block',margin :'2px',transition : '1s all ease',border : `0.4vh dashed black`}}>
      
    </div>
  )
}
