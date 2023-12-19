import React from 'react'
import {TodoItems} from './TodoItems'

export const Body = (props) => {
  return (
    <div className="container">
        <h2> I am body</h2>
        <TodoItems work ={props.works[0]}/>
        
    </div>
  )
}
