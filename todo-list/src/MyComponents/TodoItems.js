import React from 'react'

export const TodoItems = ({work}) => {
  return (
    <div>
    <h4>{work.SNo}. {work.Title}</h4>
    <p>{work.Desc}</p>
    </div>
  )
}
