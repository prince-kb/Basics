import React from 'react'

export default function Contact(props) {
  return (
    <>
    <div className="container my-4" style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}}>
    <h2 className='d-flex justify-content-center'>This is the Contact page of our website {props.title}</h2>
    <h4 className='d-flex justify-content-center'>Here you will find all the ways you can suggest or complain something about this website</h4>
    </div>
    <div className="container d-flex justify-content-center" style={{color : (props.mode === 'dark')||(props.mode === 'secondary')||(props.mode === 'success')||(props.mode === 'danger') ? 'white' : 'black'}}>
        <table className= {`table table-bordered table-dark`} >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Contact type</th>
                <th>Contact Address</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>1.</td>
                <td>Landline</td>
                <td>1900-7800-9878</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Phone Number</td>
                <td>9999999999</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Mail</td>
                <td>multipurposetextbox@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Mailing address</td>
                <td>4th avenue, Park Siiieet</td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}
