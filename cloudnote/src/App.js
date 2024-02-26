import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NoteState from './context/Notes/NoteState';
import Alert from './Components/Alert';
function App(props) {
  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{
  
      setAlert({
        message : msg,
        type : type
      })
      setTimeout(()=>{
        setAlert("")
      },2000);
    }
  return (
    <>
    { /* Since we are passing arguments and props through context api, at the main file, where components are available and used widely, they should be wrapped inside the name of the context component.
    In this case it is <NoteState></NoteState> */ }
    <NoteState>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <Outlet showAlert={showAlert}/>
    </NoteState>
    </>
  );
}

export default App;
