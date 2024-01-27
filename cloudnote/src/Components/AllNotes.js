import NoteContext from "../context/Notes/NoteContext";

import { useContext,useState } from "react";

import React from "react";
import NoteItem from "./NoteItem";
function Notes() {
  const [n,setN]=useState({title : "",notes : "", tag : ""})
  const note = useContext(NoteContext);
  const { notes,addNote} = note;
  const onChange=(e)=>{
    setN({...n,[e.target.name] : e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    addNote(n);
  }
  return (
    <>
      <div className="my-3">
        <h2 className="h2 container">Please fill the notes form</h2>
        <form className="container mb-3">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="title" placeholder="Title" name="title" onChange={onChange}/>
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave your Notes here" id="notes" name="notes"style={{height: "100px"}} onChange={onChange}></textarea>
            <label htmlFor="notes">Your Notes here</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tag" placeholder="Tag" name="tag" onChange={onChange}/>
            <label htmlFor="tag">Tag for your note</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>Add Note</button>
        </form>

        <div className="d-flex justify-content-center">

        <button className="btn btn-primary"  type="button" data-bs-toggle="collapse" data-bs-target="#ww" aria-expanded="false" aria-controls="ww">
          Show my notes
        </button>
        <div style={{minHeight: "120px"}}>
          <div className="collapse collapse-horizontal" id="ww">
            <div className="card card-body" style={{width: "80vw"}}>
            <div className="row">
                <h2 className="h2 d-flex justify-content-center"> <b>AllNotes</b> </h2>
                {notes.map((note) => {
                  return <NoteItem note={note} key={note._id} />;
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
