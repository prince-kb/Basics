import React from 'react'

//This will import prototype(ie, it is string or int or ....)
import PropTypes from 'prop-types'
export default function Navb(attributte) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{attributte.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      { attributte.searchopt ?      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : "Searching is not available"}
    </div>
  </div>
</nav>
  )
}

//This will declare that title is a string type variable or int type
Navb.propTypes = {
  title : PropTypes.string,
  searchopt : PropTypes.bool
}

//This will be passed if any value to Title is not given
Navb.defaultProps = {
title : "No Title",
searchopt : true
}