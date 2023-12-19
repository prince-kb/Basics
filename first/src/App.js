import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import TextBox from './Components/TextBox';
import React,{useState} from 'react';
import {Routes,Route} from'react-router-dom';
function App() {
  const[mode,setMode]=useState(null);
  const toggleMode=(color)=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.add('bg-'+color);
    setMode(color);
    firstCapitalizer(color);
    showAlert(`${firstCapitalizer(color)} theme enabled` ,`${color ==='success'? 'danger' : 'success'}`);
    }
    const firstCapitalizer=(name)=>{
      let x=name[0];
      return x.toUpperCase() + name.slice(1);
    }
const [alert, setAlert] = useState(null);

const showAlert=(msg,type,length)=>{

  if(length===0){
    setAlert({
      message : "Enter text first",
      type : type
    })
    setTimeout(()=>{
      setAlert("")
    },2000);
  }
  else {
    setAlert({
      message : msg,
      type : type
    })
    setTimeout(()=>{
      setAlert("")
    },2000);
  }
}
  return (
    <>
    <Navbar title="Multipurpose Text Box" home="Home" link="About" contact='Contact Us'toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<TextBox heading="Multipurpose TextBox" toggleMode={toggleMode} mode={mode} showAlert={showAlert} />}></Route>
      <Route path='/about' element={<About toggleMode={toggleMode} mode={mode}/>}></Route>
      <Route path='/contact' element={<Contact toggleMode={toggleMode} mode={mode}/>}></Route>
    </Routes>
    </>
  );
  }
export default App;
