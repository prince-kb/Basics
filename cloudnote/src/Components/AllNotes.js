import NoteContext from "../context/Notes/NoteContext";

import { useContext } from "react";

import React from "react";
import NoteItem from "./NoteItem";
function Notes() {
  const note = useContext(NoteContext);
  const { notes, setNotes } = note;
  return (
    <>
    <div className="my-3">
      <h2 className="h2 container">Please fill the notes form</h2>
      <form className="container">

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
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
    </>
  );
}

export default Notes;
