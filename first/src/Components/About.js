import React from 'react'
import logo192 from './logo192.png'
export default function About(props) {
  return (
    <>
    <div className="container my-4">
    <img src={logo192} alt="Image unavailable" className='container' style={{ display : 'inline-block', height : '80px', width : '120px'}}/>
    <h3 style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black',display : 'inline'}} className='my-3' >This is about page</h3>
    </div>    
    <div className='container my-3'>
    <h4 style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}} className='my-3'>Here you can find all the information needed for this page</h4>
    <p style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}}  className=''>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex voluptates laborum iusto quaerat, tempora, beatae maiores accusantium expedita reiciendis maxime. Eos id autem sed, animi numquam aspernatur. Voluptatem qui, quasi hic nobis maxime vero, dolore quisquam magni itaque omnis maiores nemo soluta. Temporibus hic eveniet, dolore voluptatibus incidunt quo.</p>
    </div>
   
    </>
  )
}
