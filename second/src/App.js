import AllNews from "./Components/AllNews";
import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar title={"News App"}/>
    <Routes>
    <Route exact path="/"  element={<AllNews country='in' category='general'/>}/>
    <Route exact path="/sources" key='sources' element={<AllNews country='in' category='sources'/>}/>
    <Route exact path="/general" key='general' element={<AllNews country='in' category='general'/>}/>
    <Route exact path="/science" key='science' element={<AllNews country='in' category='science'/>}/>
    <Route exact path="/entertainment" key='entertainment' element={<AllNews country='in' category='entertainment'/>}/>
    <Route exact path="/sports" key='sports' element={<AllNews country='in' category='sports'/>}/>
    <Route exact path="/business" key='business' element={<AllNews country='in' category='business'/>}/>
    <Route exact path="/health" key='health' element={<AllNews country='in' category='health'/>}/>
    <Route exact path="/technology" key='technology' element={<AllNews country='in' category='technology'/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
