import React, { Component } from 'react'
import l from './Pictures/loading.gif'
export class Loading extends Component {
  render() {
    return (
      <img src={l} alt='Unavialable' className="rounded mx-auto d-block my-3" style={{transition : 'all 0.2 0 ease'}}/>
    )
  }
}

export default Loading
