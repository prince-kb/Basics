import React, { useContext, useEffect } from 'react'
import noteContext from '../context/Notes/NoteContext'
function Home() {
    const a = useContext(noteContext);

    {/*This is a render component of componentDidMount so we need to add eslint..... line to hide the error*/}
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    
  return (
    <div>
      <h1 className="h1">HOME</h1>
      /* a.first.name means that first is imported as a state component named as first and its name and department value are read*/
        <h2 className="h2">Hello {a.state.name}, you are allocated {a.state.department} branch</h2>
    </div>
  )
}

export default Home
