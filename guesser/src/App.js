import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./Colors/App.css";
import Scores from "./Scores";
import Header from "./Header";
import Start from "./Start";
import Table from "./Components/Table";
import qm2 from "./pics/qm2.png";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:   <Header/>
    },
    {
      path : "/start",
      element : <Start/>
    }
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  return (
    <div className="App my-3">

      <Scores />
      <div id="mainid" className="my-3">
        <div>
          <h2 id="c" className="my-3">
            Choose One
          </h2>
          <Table></Table>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <img src={qm2} alt="None" height="100px" className="my-3" />
          <div id="num">
            <div>
              <h3 className="my-3">Player</h3>
              <h3 className="my-3">Computer</h3>
            </div>
            <div>
              <h3 className="my-3 mx-3">{0}</h3>
              <h3 className="my-3 mx-3">{1}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
