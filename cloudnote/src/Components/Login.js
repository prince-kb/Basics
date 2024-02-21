import React,{useState} from 'react'
const host = "http://localhost:5000"
const success=false;
const Login = () => {
    const [ credentials,setCredentials]=useState({email : "", password : ""})
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name] : [e.target.value]})
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await fetch(`${host}/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email : credentials.email,password : credentials.password}),
            });
            const res = await response.json();
            console.log(res)
            console.log("Working from login page end")
        }
        catch(err){
            console.log(err)
          }
    }
  return (
    <div>
    <form className='container'>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login
