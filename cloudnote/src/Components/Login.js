import React,{useState,useContext} from 'react'
import NoteContext from '../context/Notes/NoteContext';
import { useNavigate } from 'react-router-dom';
const host = "http://localhost:5000"


const Login = () => {
    const [ credentials,setCredentials]=useState({email : "", password : ""})
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name] : [e.target.value]})
    }
    const navigate=useNavigate();
    const p = useContext(NoteContext);
    const {setSuccess,fetchmyNotes}=p;
  
    const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await fetch(`${host}/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            });
            const res = await response.json();
            if(res.success){
              localStorage.setItem('token',response.authtoken);
              navigate("/");
              setSuccess(true);
              fetchmyNotes();
            }
        }
        catch(err){
            console.log(err)
          }
    }
  return (
    <div>
    <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Login
