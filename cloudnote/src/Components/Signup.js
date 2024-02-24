import React, { useContext, useState } from 'react'
import NoteContext from '../context/Notes/NoteContext'

const Signup = () => {
  const host = "http://localhost:5000"
  const [credentials,setCredentials]=useState({name : "",email : "",pass : ""})
  const p = useContext(NoteContext);
  const {fetchmyNotes,setSuccess}=p;
  const Change=(e)=>{
    setCredentials({...credentials,[e.target.name]:[e.target.value]});
  }
  const Submit=async (e)=>{
    e.preventDefault();
      const {name,email,pass}=credentials;
      try{
        const response = await fetch(`${host}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
              },
          body: JSON.stringify({name : name,email : email,password : pass,description : "none"}),
        });
        const res = await response.json();
        console.log("User Added")
        console.log(res)
      }
      catch(err){
        console.log(err)
      }
 
      console.log(email,pass);
      try{
        const response = await fetch(`${host}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email,pass}),
        });
        const res = await response.json();
        if(res.success){
          localStorage.setItem('token',response.authtoken);
          // navigate("/");
          setSuccess(true);
          fetchmyNotes();
        }
    }
    catch(err){
        console.log(err)
      }
  }
  return (
    <div className='container'>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter your full name</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={Change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={Change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Password</label>
          <input type="password" className="form-control" id="pass" name="pass" value={credentials.pass} onChange={Change}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="check1"/>
          <label className="form-check-label" htmlFor="check1">I agree to terms and conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
