import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NoteState from './context/Notes/NoteState';
function App() {
  return (
    <>
    <NoteState>
    <Navbar/>
    <Outlet/>
    </NoteState>
    </>
  );
}

export default App;
