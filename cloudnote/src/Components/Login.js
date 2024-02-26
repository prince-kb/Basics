import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const host = "http://localhost:5000"
  const navigate=useNavigate();
    const [ credentials,setCredentials]=useState({email : "name@gmail.com", password : "name"})
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name] : [e.target.value]})
    }

    const showAlert=(msg,type)=>{

      setAlert({
        message : msg,
        type : type
      })
      setTimeout(()=>{
        setAlert("")
      },2000);
    }
    
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
              localStorage.setItem('token',res.authToken);
              showAlert("Login Successful",'success')
              navigate("/");
              // fetchmyNotes();
            }
          }
          catch(err){
          showAlert("Login Failed",'warning')
            console.log(err)
          }
    }
  return (
    <div>
    <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required/>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Login
