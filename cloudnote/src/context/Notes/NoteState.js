import { useState,useEffect } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
  //Since we are using host:5000 for backend, we will need the same and not host:3000 which is for our frontend
    const host = "http://localhost:5000"
    useEffect(() => {
      fetchmyNotes();
    }, [])

    const [success,setSuccess]=useState(false);

    const allNotes = [
        {
          "_id": "fakeid1",
          "user": "65abef3f8e54e600d684fc12",
          "title": "My first noteeee",
          "notes": "Example noteeee",
          "tag": "default",
          "date": new Date(),
          "__v": 0
        }
      ]

      const [notee, setNotes] = useState(allNotes)
      const fetchmyNotes=async()=>{
            try{          
            const response = await fetch(`${host}/notes/fetchnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I"
            }
          });
          if(response){
            const n = await response.json();
            setNotes(n);
          }
        }
          catch(error){
            console.log("Error occured",error)
          }
        }
        
      //API calling for addnote functionality to mongodb
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
          const res = await response.json();
          setNotes(notee.concat(res));
          console.log("Note Added")
        }
        catch(err){
          console.log(err)
        }
      }

      const deleteNote=async(id)=>{
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I"
          }
        });
        const res = await response.json();
        console.log("Note deleted",res)
        setNotes(notee.filter((allNotes)=>{return allNotes._id!==id}))
      }

      const editNote=async(id,title,notes,tag)=>{

        try{
        let newNotes = JSON.parse(JSON.stringify(notee))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].notes=notes;
            newNotes[index].tag=tag;
            break;
          }
          setNotes(newNotes)
        }

        const response = await fetch(`${host}/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmVmM2Y4ZTU0ZTYwMGQ2ODRmYzEyIn0sImlhdCI6MTcwNTc2NjczOX0.FONOAw35avJRLG3aCvhYxQIDaoaY2YhZN2kRtM86T4I",
          },
          body : JSON.stringify({title,notes,tag})
        });
        console.log("Note updated" , response)
      }
        catch(err){
          console.log("Error")
        }
      }

    return(
        /* Sending first and update as props to the NoteContext.Provider function so that it will also be passed to all the childrens */
        <NoteContext.Provider value={{notee,setNotes,addNote,deleteNote,editNote,fetchmyNotes,success,setSuccess}}>
        {props.children}
        </NoteContext.Provider>
     )}
export default NoteState;