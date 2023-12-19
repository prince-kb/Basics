import './App.css';

//For this import, rfc function is used in the Navb file, so curly brackets is not here 
import Navb from "./MyComponents/Navb";
//For these imports, rafc function is used,so curly brackets is there 
import {Body} from "./MyComponents/Body";
import {Footer} from "./MyComponents/Footer";
function App() {
  const works=[
    {
      SNo : 1,
      Title : "Bring Fruits",
      Desc : "Buy apple 1kg,mango 1.5kg at least"
    },
    {
      SNO : 2,
      Title : "Exercise",
      Desc : "Exercise 1 hr including buffies"
    },
    {
      SNo : 3,
      Title : "Go to Colllege",
      Desc : "Get ready, have breakfast and leave 5 mins early for college"
    }
  ]
  return (
    <>
    
    <Navb title="Project" searchopt={true}/>
    <Body works={works}/>
    <Footer/>

    </>
  );
}

export default App;
