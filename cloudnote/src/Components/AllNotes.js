import NoteContext from "../context/Notes/NoteContext";

import { useContext,useState,useRef } from "react";

import React from "react";
import NoteItem from "./NoteItem";
function Notes() {
  
  const ref = useRef(null)
  const refClose = useRef(null)
  const [n,setN]=useState({title : "" ,notes : "", tag : ""})
  const [nn,setNn]=useState({id : "",etitle : "",enotes : "", etag : ""})
  const note = useContext(NoteContext);
  const { notee,addNote,editNote} = note;


  const onChange=(e)=>{
    setN({...n,[e.target.name] : e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    setN({...n,[e.target.name] : e.target.value})
    addNote(n.title,n.notes,n.tag);
    setN({title : "" ,notes : "", tag : ""});
  }

  //When clicked on editnote icon on any noteitem 
  const updateNote=async(e)=>{
    ref.current.click()
    setNn({id : e._id,etitle:e.title,enotes:e.notes,etag:e.tag})
  }

  //When any text of the modale changes
  const onChangeee=(e)=>{
    setNn({...nn,[e.target.name] : e.target.value})
  }
  //When submit is clicked
  const submittt=(e)=>{
    e.preventDefault()
    try{
      editNote(nn.id,nn.etitle,nn.enotes,nn.etag);
      console.log("Updating notes")
      console.log(nn)
    }
    catch(e){
      console.log("Cannot update note due to : ")
      console.log(e)
    }
    //To close the modale when trying to save the editnote
    refClose.current.click()
  }
  

  return (
    <>

      {/* Adding Note */}
      <div className="my-3">
        <h2 className="h2 container">Please fill the notes form</h2>
        <form className="container mb-3">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="title" placeholder="Title" name="title" value={n.title} onChange={onChange} minLength={1} required/>
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave your Notes here" id="notes" name="notes" value={n.notes} style={{height: "100px"}} onChange={onChange} minLength={3} required></textarea>
            <label htmlFor="notes">Your Notes here</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tag" placeholder="Tag" name="tag" value={n.tag} onChange={onChange}/>
            <label htmlFor="tag">Tag for your note</label>
          </div>
          <button type="submit" disabled={n.title.length<1 || n.notes.length<3} className="btn btn-primary" onClick={submit}>Add Note</button>
        </form>

        {/* Edit Note Modal */}
            <div className="d-flex justify-content-center my-3">
          <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#staticBackdrop">
            Edit Note
          </button>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                  {/* Form for modal */}
                <h3 className="h3 container">Please fill the notes form</h3>
                  <form className="container mb-3">
                  <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="etitle" name="etitle" value={nn.etitle} onChange={onChangeee} minLength={1} required/>
                      <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea className="form-control"  id="enotes" name="enotes"style={{height: "80px"}} value={nn.enotes} onChange={onChangeee} minLength={3} required></textarea>
                      <label htmlFor="notes">Your Notes here</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="etag" name="etag" value={nn.etag} onChange={onChangeee}/>
                      <label htmlFor="tag">Tag for your note</label>
                    </div>
                  </form>


                </div>
                <div className="modal-footer">
                  <button type="button" ref={refClose} className="btn btn-danger" data-bs-dismiss="modal">X</button>
                  <button type="submit" className="btn btn-primary" disabled={nn.etitle.length<1 || nn.enotes.length<3} onClick={submittt}>Edit Note</button>
                </div>
              </div>
            </div>
          </div>
          </div>

                {/*         Each note from NoteItem*/}        
       <div className="d-flex justify-content-center">
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#ww" aria-expanded="false" aria-controls="ww">
          Show my notes
        </button>
        <div style={{minHeight: "120px"}}>
          <div className="collapse collapse-horizontal" id="ww">
            <div className="card card-body" style={{width: "80vw"}}>
            <div className="row">
                <h2 className="h2 d-flex justify-content-center"> <b>AllNotes</b> </h2>
                {notee.map((note) => {
                  return <NoteItem note={note} updateNote={updateNote} key={note.date} />;
                })}
              </div>    
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Notes;
