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
  <>
  </>
  );
}

export default App;
