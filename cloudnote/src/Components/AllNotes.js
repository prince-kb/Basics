import NoteContext from "../context/Notes/NoteContext";

import { useContext } from "react";

import React from "react";
import NoteItem from "./NoteItem";
function Notes() {
  const note = useContext(NoteContext);
  const { notes, setNotes } = note;
  return (
    <div className="my-3">
      <h2 className="h2 container">Please fill the notes form</h2>
      <form className="container">
        <div className="mb-3 mxy-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="row">
        <h3 className="h3"> AllNotes </h3>
        {notes.map((note) => {
          return <NoteItem note={note} key={note.id} />;
        })}
      </div>
    </div>
  );
}

export default Notes;
