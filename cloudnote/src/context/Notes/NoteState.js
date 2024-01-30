import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
  //Since we are using host:5000 for backend, we will need the same and not host:3000 which is for our frontend
    const host = "http://localhost:5000"

    const allNotes = [
        {
          "_id": "fakeid1",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My first note",
          "notes": "Saved the note to the user's database",
          "tag": "default",
          "date": new Date(),
          "__v": 0
        },
        {
          "_id": "fakeid2",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My second note",
          "notes": "Saved the note to the user's database",
          "tag": "default",
          "date": new Date(),
          "__v": 0
        },
        {
          "_id": "fakeid3",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My third note",
          "notes": "Saved the note to the user's database",
          "tag": "default",
          "date": new Date(),
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(allNotes)
      const fetchmyNotes=async()=>{
          const response = await fetch(`${host}/notes/fetchnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I"
            }
          });
          const rest = await response.json();
          setNotes(rest);
        }
        
      //Here we need to call the api also
      const addNote=async (title,notes,tag)=>{
          try{
          const response = await fetch(`${host}/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I"
            },
            body: JSON.stringify({title,notes,tag}),
          });
          const rest = await response.json();
          console.log("Note added")
          console.log(rest)
        }
        catch(err){
          console.log(err)
        }

        
        let n = {
          "_id": "65abef6b8e54e600d684fc17",
          "user": "65abef3f8e54e600d684fc12",
          "title": title,
          "notes": notes,
          "tag": tag,
          "date": new Date(),
          "__v": 0
        }
        setNotes(notes.concat(n));
      }

      const deleteNote=async(id)=>{
        const response = await fetch(`${host}/notes/deletenote/65acf440769613c8c8ca17f2`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I"
          }
        });
        const rest = await response.json();
        console.log("Note deleted")
        console.log(rest)
        console.log(id)
        setNotes(notes.filter((allNotes)=>{return allNotes._id!==id}))
      }
      const editNote=(id,title,notes,tag)=>{
        for (let index = 0; index < allNotes.length; index++) {
          const element = allNotes[index];
          if(element._id===id){
            element.title=title;
            element.notes=notes;
            element.tag=tag;
          }
        }
      }

    return(
        /* Sending first and update as props to the NoteContext.Provider function so that it will also be passed to all the childrens */
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,fetchmyNotes}}>
        {props.children}
        </NoteContext.Provider>
     )}
export default NoteState;