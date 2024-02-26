import React, { useEffect} from "react";
import { Link,useLocation, useNavigate} from "react-router-dom";
function Navbar(props) {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname)
  })
  const allll=()=>{
    props.showAlert("Hiii USEEFFECT",'success')
  }
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/");
  }
    return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="" className="navbar-brand fw-bold">Cloud NoteBook</Link>

          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to="" className={`nav-link px-2 fw-bold  ${location === "/" ? "active": ""}`}>Home</Link>
              </li>
              <li>
                <Link to="about" className={`nav-link px-2 fw-bold nav-link ${location === "/about" ? "active": ""}`}>About</Link>
              </li>
              <li>
                <Link to="contact" className={`nav-link px-2 fw-bold nav-link ${location === "/contact" ? "active": ""}`}>Contact</Link>
              </li>
              <li>
                <Link to="mynotes" className={`nav-link px-2 fw-bold nav-link ${location === "/mynotes" ? "active": ""}`}>Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
              <button className="btn btn-dark" onClick={allll}>CM</button>
            </ul>
          </div>
          <form className="mx-4 d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
          {!localStorage.getItem('token') ?
           <div>
            <ul className="navbar-nav">
            <li><Link to="login"className="mx-1 btn btn-outline-success">Login</Link></li>
            <li><Link to="signup" className="mx-1 btn btn-outline-secondary">Signup</Link></li>
            </ul>
          </div>  : <button className="btn btn-primary" onClick={handleLogout}>LOGOUT</button>
           }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
