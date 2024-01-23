import NoteContext from "../context/Notes/NoteContext";

import { useContext } from "react";

import React from "react";
import NoteItem from "./NoteItem";
import { useState } from "react";
function Notes() {
  
  const note = useContext(NoteContext);
  const { notes, setNotes } = note;
  return (
    <div>
      <div className="row">
        <h3 className="h3"> AllNotes </h3>
          {notes.map((note) => {
            return <NoteItem note={note} />;
          })}
      </div>
    </div>
  );
}

export default Notes;
