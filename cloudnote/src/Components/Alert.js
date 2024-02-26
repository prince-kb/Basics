import React from 'react'

function Alert(props) {

  return (
    <div>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <h4 className="h4">{props.alert.message}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}

export default Alert
