import React,{useState} from 'react'

export default function TextBox(props) {
  const[text,newText]=useState("");
  const change=(event)=>{
    newText(event.target.value);
  }
const caseUp=()=>{
let x=text.toUpperCase();
props.showAlert("Text converted to upper case","primary",x.length);
newText(x);
}
const caseLow=()=>{
let x=text.toLowerCase();
props.showAlert("Text converted to lower case","secondary",x.length);
newText(x);
}
const removeSpace=()=>{
  let x=text.split(" ").join("");
  props.showAlert("All spaces removed","warning",x.length);
  newText(x);
}

const removeExtraSpace=()=>{
  let x=text.split(/ [ ]+/).join(" "); 
  props.showAlert("Extra Spaces Removed","success",text.length);
  newText(x);
  return x;
}
const trim=()=>{
  let x=text.trim();
  props.showAlert("Text trimmed (ie from start and end)","info",x.length);
  newText(x);
}
const clearText=()=>{
  props.showAlert("Text Cleared","danger",text.length);
  alert("This will clear all your written text");
  newText("");

}
const copyText=()=>{
  let x=document.getElementById("myBox");
  x.select();
  navigator.clipboard.writeText(x.value);
  props.showAlert("Text Copied",`${props.mode}`,x.length);
}
  return (
    <div className={`container bg-${props.mode} rounded`} style={{minWidth : '100%' , minHeight : 'max-content'}}>
    <h1 className='text-center my-2' style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea placeholder="Enter text" className={`form-control my-2`}  style={{backgroundColor : (props.mode === 'dark') ? 'grey' : 'white' , color : props.mode==='dark' ? 'white' : 'black',placeholderTextColor : 'blue'}} id="myBox" rows="8" value={text} onChange={change}/>
    </div>
    <div className="mb-3">
    </div>
    <div className="mb-3 inline" >
    <button className="my-2 btn btn-primary border border-secondary mx-2" onClick={caseUp}>UpperCase</button>
    <button className="my-2 btn btn-secondary border border-primary mx-2" onClick={caseLow}>LowerCase</button>
    <button className="my-2 btn btn-warning border border-info mx-2" onClick={removeSpace}>Remove Spaces</button>
    <button className="my-2 btn btn-success border border-danger mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
    <button className="my-2 btn btn-info border border-warningy mx-2" onClick={trim}>Trim</button>
    <button className="my-2 btn btn-danger border border-success mx-2" onClick={clearText}>Clear Text</button>
    <button className={`my-2 btn mx-2`}  style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'black' : 'white',backgroundColor : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}} onClick={copyText}>Copy Text</button>
    </div>
    <p className='container' style={{color : props.mode==='dark' ? 'white' : 'black'}}><b>Text contains {text.length} characters and {text.split(/\s+/).join(" ").split(" ").length-1} words </b></p>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button  className="accordion-button collapsed border border-rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white' , color : props.mode==='dark' ? 'white' : 'black'}} aria-expanded="false" aria-controls="collapseTwo">
        Preview
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={{backgroundColor : props.mode==='dark'||'secondary' ? 'grey' : 'dark',color : props.mode==='dark' ? 'white' : 'black'}}>
        <p>{text}</p>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}



