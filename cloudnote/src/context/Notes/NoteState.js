import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const allNotes = [
        {
          "_id": "65abef6b8e54e600d684fc17",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My first note",
          "notes": "Saved the note to the user's database",
          "tag": "First1",
          "date": "2024-01-20T16:06:03.677Z",
          "__v": 0
        },
        {
          "_id": "65abef6b8e54e600d684fc17r",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My second note",
          "notes": "Saved the note to the user's database",
          "tag": "First2",
          "date": "2024-01-20T16:06:03.677Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600d684fc1a",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My third note",
          "notes": "Saved the note to the user's database",
          "tag": "First3",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600d684frc1j,na",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My fourth note",
          "notes": "Saved the note to the user's database",
          "tag": "First4",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600d6er8lih4fc1a",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My fifth note",
          "notes": "Saved the note to the user's database",
          "tag": "First5",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600d68dewe4grfc1a",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My sixth note",
          "notes": "Saved the note to the user's database",
          "tag": "First6",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600d6fr84fc1a",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My seventh note",
          "notes": "Saved the note to the user's database",
          "tag": "First7",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
        {
          "_id": "65abef868e54e600betgd684fdwedc1a",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My eighth note",
          "notes": "Saved the note to the user's database",
          "tag": "First8",
          "date": "2024-01-20T16:06:30.083Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(allNotes)
    return(
        /* Sending first and update as props to the NoteContext.Provider function so that it will also be passed to all the childrens */
        <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
        </NoteContext.Provider>
     )}
export default NoteState;